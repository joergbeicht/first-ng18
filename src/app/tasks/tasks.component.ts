import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  task: Task = {
    id: 't1',
    userId: 'u1',
    title: 'Title',
    summary: 'learn all the basic',
    dueDate: new Date().toISOString(),
  };

  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Title',
      summary: 'learn all the basic',
      dueDate: new Date().toISOString(),
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Title 2',
      summary: 'learn all the basic',
      dueDate: new Date().toISOString(),
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Title 3',
      summary: 'learn all the basic',
      dueDate: new Date().toISOString(),
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
