import { Inject, Injectable } from '@nestjs/common';
import { MappedException } from 'nestjs-mapped-exception';
import { Connection, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksEntity } from './entities/task.entity';
import { TasksException } from './tasks.exception';

@Injectable()
export class TasksService {
  private taskRepository: Repository<TasksEntity>;
  @Inject(MappedException)
  private readonly exception: MappedException<TasksException>;

  constructor(private connection: Connection) {
    this.taskRepository = this.connection.getRepository(TasksEntity);
  }

  async validatesName(name: string) {
    const existentTask = await this.taskRepository.findOne({ name });

    if (existentTask) {
      this.exception.ERRORS.TASK_NAME_ALREADY_EXISTS.throw();
    }
  }

  async validatesTaskById(id: string): Promise<TasksEntity> {
    const especificTask = await this.taskRepository.findOne({
      where: { id: id },
    });
    if (!especificTask) {
      this.exception.ERRORS.TASK_NOT_FOUND_BY_ID.throw();
    }
    return especificTask;
  }

  async create(createTaskDto: CreateTaskDto) {
    await this.validatesName(createTaskDto.name);

    const newTask = this.taskRepository.create();

    newTask.name = createTaskDto.name;
    newTask.active = createTaskDto.active;

    const savedTask = await this.taskRepository.save(newTask);
    return savedTask;
  }

  async getAll(): Promise<TasksEntity[]> {
    const allTasks = await this.taskRepository.find();
    return allTasks;
  }

  async getOne(id: string): Promise<TasksEntity> {
    const validatedTaskById = await this.validatesTaskById(id);

    return validatedTaskById;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOneOrFail({
      where: { id: id },
    });

    task.active = updateTaskDto.active;

    await this.taskRepository.save(task);
    return task;
  }

  async delete(id: string) {
    const isActive = await this.getOne(id);

    if (isActive.active) {
      this.exception.ERRORS.TASK_SHOULD_BE_NOT_ACTIVE.throw();
    }

    await this.taskRepository.delete(id);
  }
}
