import {
  Body,
  Controller,
  Get,
  Post,
  // Patch,
  // Delete,
  // Param,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateAppDto } from 'src/app/dto/create-app.dto';
// import { UpdateAppDto } from 'src/app/dto/update-app.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  listAll() {
    return this.taskService.listAllTask();
  }

  @Post('createTask')
  createTask(@Body() body: CreateAppDto) {
    return this.taskService.createTask(body);
  }

  // @Patch('editTask/:id')
  // updateTask(@Param('id') id: number, @Body() updateAppDto: UpdateAppDto) {
  //     return this.taskService.updateTask(id, updateAppDto);
  // }

  // @Delete(':id')
  // deleteTask(@Param('id') id: number) {
  //     return this.taskService.deleteTask(id);
  // }
}
