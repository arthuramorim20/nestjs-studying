import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TaskModule } from 'src/task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
