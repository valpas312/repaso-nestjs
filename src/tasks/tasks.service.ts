import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from 'generated/prisma';

// export interface Task {
//     id: number;
//     title: string;
//     description?: string;
//     completed: boolean;
// }

@Injectable()
export class TasksService {

    constructor(private prisma: PrismaService) {}

    private tasks: Task[] = [];

    // getTasks(): Task[] {
    //     console.log(this.tasks);
    //     return this.tasks;
    // }

    async getTasks(): Promise<Task[]> {
        return this.prisma.task.findMany();
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
        return task;
    };

    // createTask(task: Task){
    //     this.tasks.push(task);
    //     console.log(this.tasks);
    //     return `Task ${task.id} created`;
    // }

    async createTask(task: Omit<Task, 'id'>): Promise<Task> {
        return this.prisma.task.create({
            data: task,
        })
    }

    // updateTask(){
    //     return 'Task updated';
    // }

    async updateTask(id: number, task: Partial<Omit<Task, 'id'>>): Promise<Task> {
        await this.getTaskById(id); // Check if task exists

        return this.prisma.task.update({
            where: { id: id },
            data: task,
        });
    }

    // deleteTask(){
    //     return 'Task deleted';
    // }

    async deleteTask(id: number): Promise<Task> {
        await this.getTaskById(id); // Check if task exists

        return this.prisma.task.delete({
            where: { id: id },
        });
    }
}
