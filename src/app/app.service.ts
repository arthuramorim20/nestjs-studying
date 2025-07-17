import { Injectable } from '@nestjs/common';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  private prisma = new PrismaClient();
  async create(user: CreateAppDto) {
    const post = await this.prisma.Post.create({
      data: {
        title: user.title,
        completed: user.completed
      },
    });
    return "created"
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return `This action returns a #${id} app`;
  }

  update(id: number, updateAppDto: UpdateAppDto) {
    return `This action updates a #${id} app`;
  }

  remove(id: number) {
    return `This action removes a #${id} app`;
  }
}
