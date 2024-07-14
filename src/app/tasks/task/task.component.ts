import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: false}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    // this.tasksService.removeTask(this.task.id);
    this.complete.emit(this.task.id);
  }
}
