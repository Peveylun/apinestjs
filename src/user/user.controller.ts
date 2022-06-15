import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('user')
export class UserController {
  @Post()
  create() {
    return 'new user';
  }

  @Get()
  getAll(@Query() query: any) {
    return `${query.limit} users`;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `user with id ${id}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return `updated user with id ${id}`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {}
}
