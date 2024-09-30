import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task/task.component';
import { TaskType } from './dataType.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class Tasks {
  @Input({ required: true }) tasks!: TaskType[];
  @Input({ required: true }) userName: string | undefined;
  @Input({ required: true }) userId: string | undefined;
  @Output() onNewTaskAdderButton = new EventEmitter<void>();
  @Output() taskCompleted = new EventEmitter<string>();

  onNewTaskAdderForm() {
    this.onNewTaskAdderButton.emit();
  }

  handleCompletedTask(id: string) {
    this.taskCompleted.emit(id);
  }

  get userTasks() {
    let tasks = this.tasks.filter((value) => {
      if (value.userId === this.userId) {
        return true;
      } else {
        return false;
      }
    });

    return tasks;
  }
}
