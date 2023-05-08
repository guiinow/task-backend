import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { GetOneByIdDto } from './dto/request/getOneById.dto';
import { MappedExceptionFilter } from 'nestjs-mapped-exception';
import { ApiParam } from '@nestjs/swagger';
import { DeleteById } from './dto/request/deleteById.dto';

@UseFilters(MappedExceptionFilter)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', required: true })
  getOne(@Param() getOneByIdDto: GetOneByIdDto) {
    return this.tasksService.getOne(getOneByIdDto.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  delete(@Param() deleteById: DeleteById) {
    return this.tasksService.delete(deleteById.id);
  }
}
