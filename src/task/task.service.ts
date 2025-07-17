import { Injectable } from '@nestjs/common';
import { CreateAppDto } from 'src/app/dto/create-app.dto';
import { UpdateAppDto } from 'src/app/dto/update-app.dto';

@Injectable()
export class TaskService {
  toDoList: CreateAppDto[] = [];

    createTask(task: CreateAppDto) {
        return this.toDoList.push(task);
    }

    listAllTask() {
        return this.toDoList;
    }

    updateTask(id: number, task: UpdateAppDto) {
    return (this.toDoList[id - 1] = task);
    }

    deleteTask(id: number) {
        return this.toDoList.splice(id);
    }
}
