import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormDataType } from '../tasks/dataType.model';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-add-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-task.component.html',
  styleUrl: './add-new-task.component.css',
})
export class AddNewTaskComponent {
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  @Input({ required: true }) userId: string | undefined;
  @Output() closeNewTaskAdder = new EventEmitter<void>();
  private taskService = inject(TasksService);

  closeNewTaskAdderForm() {
    this.closeNewTaskAdder.emit();
  }

  formSubmitted() {
    if (this.enteredDate === '') {
      this.enteredDate =
        new Date().getFullYear() +
        '-' +
        new Date().getMonth() +
        '-' +
        new Date().getDate();
    }

    if (this.enteredTitle === '') {
      this.enteredTitle = 'No Title';
    }

    if (this.enteredSummary === '') {
      this.enteredSummary = '';
    }
    this.taskService.addNewTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );

    this.closeNewTaskAdderForm();
  }
}
