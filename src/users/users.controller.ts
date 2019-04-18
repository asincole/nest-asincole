// users/users.controller.ts
import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get(':id')
    getUser(@Param('id') id: number): User {
        const user = this.usersService.getUser(id);
        if (user) {
            return user;
        } else {
            throw new NotFoundException('User not found in our database, are you sure you have the user id correct?');
        }
    }

    @Get()
    getUsers(): User[] {
        const users = this.usersService.getUsers();
        if (users) {
            return users;
        } else { throw new NotFoundException('No users in our database at the moment'); }
    }

}
