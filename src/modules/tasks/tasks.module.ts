import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MappedExceptionModule } from 'nestjs-mapped-exception';
import { TasksException } from './tasks.exception';
import { TasksGrpcController } from './task-grcp.controller';

@Module({
  controllers: [TasksController, TasksGrpcController],
  providers: [TasksService],
  imports: [
    MappedExceptionModule.forFeature(TasksException, { prefix: 'TASKS_ERROR' }),
  ],
})
export class TasksModule {}
