import { UpdateUserDto } from '../dto/update-user.dto';
export declare class UserController {
    create(): string;
    getAll(query: any): string;
    getOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): void;
}
