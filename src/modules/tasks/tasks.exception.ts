import { MappedExceptionItem } from 'nestjs-mapped-exception';
import { HttpStatus } from '@nestjs/common';

export class TasksException {
  TASK_NAME_ALREADY_EXISTS: MappedExceptionItem = {
    message: 'Task with this name already exists',
    code: 1,
    statusCode: HttpStatus.CONFLICT,
  };

  TASK_NOT_FOUND_BY_ID: MappedExceptionItem = {
    message: 'Task with this id not found',
    code: 2,
    statusCode: HttpStatus.NOT_FOUND,
  };

  TASK_SHOULD_BE_NOT_ACTIVE: MappedExceptionItem = {
    message: 'Task must be inactive to be deleted',
    code: 3,
    statusCode: HttpStatus.EXPECTATION_FAILED,
  };
}
