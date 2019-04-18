// users/users.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {

    users: User[] = [
        { id: 1, firstname: 'A-sin', lastname: 'cole', age: 18 },
        { id: 2, firstname: 'paul', lastname: 'pelumi', age: 20 },
        { id: 3, firstname: 'bolaji', lastname: 'stone', age: 25 },
    ];

    getUsers(): User[] {
        return this.users;
    }

    getUser(id: number): User {
        const findUserById = (user: User): boolean => {
            return user.id == id;
        };
        return this.users.find(findUserById);
    }
}
