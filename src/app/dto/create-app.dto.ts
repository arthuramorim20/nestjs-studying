import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateAppDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsBoolean()
    completed: boolean;
}
