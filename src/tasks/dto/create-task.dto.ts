import { IsString, IsBoolean, IsNotEmpty, MinLength, MaxLength, IsOptional } from 'class-validator';
import { Task } from "generated/prisma";

export class CreateTaskDto implements Omit<Task, 'id' | 'userId'> {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(200)
    description: string;

    @IsBoolean()
    @IsOptional()
    completed: boolean = false;

}