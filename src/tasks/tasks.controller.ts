import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    tasksService:TasksService

    constructor(tasksService:TasksService){
        this.tasksService = tasksService
    }

    // Tambien se puede hacer asi:
    // constructor(private tasksService:TasksService){}

    @Get('/')
    getAllTasks(): string {
        return `Tasks: ${this.tasksService.getTasks()}`;
    }

}
