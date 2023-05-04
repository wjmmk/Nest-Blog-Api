import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { usersProviders } from './users.providers';
import { UserController } from './controllers/user.controller';

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
  controllers: [UserController]
})
export class UsersModule {}
