import { IsString, IsBoolean } from 'class-validator';

export class CreateAppDto {
  @IsString()
  title: string;

  @IsBoolean()
  completed: boolean;
}
