import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
