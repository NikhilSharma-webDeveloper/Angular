import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from '../dataType.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
  @Output() taskCompleted = new EventEmitter<string>();

  completeTask() {
    this.taskCompleted.emit(this.task.id);
  }
}
