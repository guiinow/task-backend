import { IsUUID } from 'class-validator';

export class GetOneByIdDto {
  @IsUUID()
  id: string;
}
