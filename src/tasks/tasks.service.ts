import { Injectable, NotFoundException } from '@nestjs/common';

export interface Task {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
}

@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getTasks(): Task[] {
        console.log(this.tasks);
        return this.tasks;
    }

    getTaskById(id: number): Task | NotFoundException {
        const task = this.tasks.find(task => task.id === id);
        if (!task) {return new NotFoundException(`Task with id ${id} not found`);}
        return task;
    }

    createTask(task: Task){
        this.tasks.push(task);
        console.log(this.tasks);
        return `Task ${task.id} created`;
    }

    updateTask(){
        return 'Task updated';
    }

    deleteTask(){
        return 'Task deleted';
    }

    patchTask(){
        return 'Task patched';
    }

}
