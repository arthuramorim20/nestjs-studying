import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma/client';
// import { Prisma } from '@prisma/client';
import { CreateAppDto } from 'src/app/dto/create-app.dto';
// import { UpdateAppDto } from 'src/app/dto/update-app.dto';

@Injectable()
export class TaskService {
    private prisma: PrismaClient = new PrismaClient();

  async createTask(task: CreateAppDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const post = await this.prisma.tasks.create({
      data: {
        title: task.title,
        completed: task.completed,
      },
    });
    // Explicitly return only the expected fields to avoid unsafe return of `any`
    return post;
  }

//   listAllTask() {
//     return this.toDoList;
//   }

//   updateTask(id: number, task: UpdateAppDto) {
//     return (this.toDoList[id - 1] = task);
//   }

//   deleteTask(id: number) {
//     return this.toDoList.splice(id);
//   }
}
