import { PartialType } from '@nestjs/mapped-types';
import { CreateAppDto } from './create-app.dto';
import { IsNumber, IsString, IsBoolean } from 'class-validator';


export class UpdateAppDto extends PartialType(CreateAppDto) {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsBoolean()
    completed: boolean;
}
