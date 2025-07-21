import { Injectable } from '@nestjs/common';
import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient, Tasks } from 'generated/prisma';
import { CreateAppDto } from 'src/app/dto/create-app.dto';

@Injectable()
export class TaskService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
    this.prisma.$extends(withAccelerate());
  }

  async createTask(task: CreateAppDto) {
    const post: Tasks = await this.prisma.tasks.create({
      data: {
        title: task.title,
        completed: task.completed,
      },
    });
    return post;
  }

  async listAllTask() {
    const getList: Tasks[] = await this.prisma.tasks.findMany();
    return getList;
  }

  //   updateTask(id: number, task: UpdateAppDto) {
  //     return (this.toDoList[id - 1] = task);
  //   }

  //   deleteTask(id: number) {
  //     return this.toDoList.splice(id);
  //   }
}
