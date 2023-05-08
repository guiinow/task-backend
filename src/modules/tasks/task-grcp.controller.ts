import { UseFilters, Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { MappedExceptionFilter } from 'nestjs-mapped-exception';
import {
  IGetOneTaskByIdInput,
  IGetOneTaskByIdOutput,
} from './interface/grpc/tasks-service.interface';
import { TasksService } from './tasks.service';

@UseFilters(MappedExceptionFilter)
@Controller('tasks-grpc')
export class TasksGrpcController {
  constructor(private readonly tasksService: TasksService) {}

  @GrpcMethod('TasksService', 'FindOne')
  async getOne(oninput: IGetOneTaskByIdInput): Promise<IGetOneTaskByIdOutput> {
    const task = await this.tasksService.getOne(oninput.id);

    return {
      id: task.id,
      name: task.name,
      active: task.active,
    } as IGetOneTaskByIdOutput;
  }
}
