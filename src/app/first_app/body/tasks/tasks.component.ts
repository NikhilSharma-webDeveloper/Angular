import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task/task.component';
import { TaskType } from './dataType.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [Task],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class Tasks {
  tasks!: TaskType[];
  @Input({ required: true }) userName: string | undefined;
  @Input({ required: true }) userId: string | undefined;
  @Output() onNewTaskAdderButton = new EventEmitter<void>();

  constructor(private service: TasksService) {
    this.tasks = service.getTasks();
  }

  onNewTaskAdderForm() {
    this.onNewTaskAdderButton.emit();
  }

  handleCompletedTask(taskId: string) {
    this.service.handleCompletedTask(taskId);
  }

  get userTasks() {
    return this.service.getSelectedUserTasks(this.userId);
  }
}
