import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from 'generated/prisma';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

// export interface Task {
//     id: number;
//     title: string;
//     description?: string;
//     completed: boolean;
// }

@Injectable()
export class TasksService {

    constructor(
        private prisma: PrismaService,
        private usersService: UsersService
    ) { }

    // private tasks: Task[] = [];

    // getTasks(): Task[] {
    //     console.log(this.tasks);
    //     return this.tasks;
    // }

    async getTasks(senderData: CreateUserDto): Promise<Task[]> {

        const user = await this.usersService.findOrCreateUser(senderData);

        console.log(senderData, "USUARIO ENCONTRADO/CREADO:");

        const tasks = await this.prisma.task.findMany({
            where: { senderId: user.id },
        });
        console.log(tasks);
        return tasks;
    }

    // getTaskById(id: number): Task | NotFoundException {
    //     const task = this.tasks.find(task => task.id === id);
    //     if (!task) {return new NotFoundException(`Task with id ${id} not found`);}
    //     return task;
    // }

    async getTaskById(id: number): Promise<Task> {
        const task = await this.prisma.task.findUnique({
            where: { id: id },
        });
        if (!task) {
            throw new NotFoundException(`Task with id ${id} not found`);
        }
        console.log(task);
        return task;
    };

    // createTask(task: Task){
    //     this.tasks.push(task);
    //     console.log(this.tasks);
    //     return `Task ${task.id} created`;
    // }

    async createTask(task: CreateTaskDto, senderData: CreateUserDto): Promise<Task> {

        const user = await this.usersService.findOrCreateUser(senderData);

        console.log(task);
        return this.prisma.task.create({
            data: {
                title: task.title,
                description: task.description ?? '',
                completed: task.completed ?? false,
                senderId: user.id, // el creador
            },
        })
    }

    // updateTask(){
    //     return 'Task updated';
    // }

    async updateTask(id: number, task: UpdateTaskDto): Promise<Task> {
        await this.getTaskById(id); // Check if task exists
        console.log(task);
        return this.prisma.task.update({
            where: { id: id },
            data: task,
        });
    }

    // deleteTask(){
    //     return 'Task deleted';
    // }

    async sendTask(task: CreateTaskDto, senderId: string) {
    if (!task.receiverId) {
      throw new Error('receiverId es obligatorio para enviar una tarea');
    }

    return this.prisma.task.create({
      data: {
        title: task.title,
        description: task.description ?? '',
        completed: false,
        senderId,
        receiverId: task.receiverId, // 👈 el destino
      },
    });
  }

    async deleteTask(id: number): Promise<Task> {
        await this.getTaskById(id); // Check if task exists
        return this.prisma.task.delete({
            where: { id: id },
        });
    }
    
}
