import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @Get('')
  async users() {
    return await this.userService.findAll();
  }
}
