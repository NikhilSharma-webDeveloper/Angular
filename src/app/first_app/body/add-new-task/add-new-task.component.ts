import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormDataType } from '../tasks/dataType.model';

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

  @Output() closeNewTaskAdder = new EventEmitter<void>();
  @Output() newTaskSubmitted = new EventEmitter<FormDataType>();

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
    this.newTaskSubmitted.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
