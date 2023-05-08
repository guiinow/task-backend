import { IsUUID } from 'class-validator';

export class DeleteById {
  @IsUUID()
  id: string;
}
