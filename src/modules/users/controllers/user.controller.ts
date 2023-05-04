import { Controller, Delete, Get, Param } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get('')
  async findAll() {
    return await this.userService.findAll();
  }

  @Delete(':id')
  async removeUser(@Param('id') id: number) {
    return await this.userService.delete(id)
  }
}
