import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAppDto } from './dto/create-app.dto';
import { UpdateAppDto } from './dto/update-app.dto';


@Controller('auth')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Post('createUser')
  // create(@Body() body: CreateAppDto) {
  //   return this.appService.create(body);
  // }

  // @Get()
  // findAll() {
  //   return this.appService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.appService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAppDto: UpdateAppDto) {
  //   return this.appService.update(+id, updateAppDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.appService.remove(+id);
  // }
}
