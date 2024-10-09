import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

function checkUserInput(data: string) {
  let regExp = /[a-zA-Z]/g;
  console.log(regExp.test(data));
  return regExp.test(data);
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  initialInvestment: string = '';
  annualInvestment: string = '';
  expectedReturn: string = '';
  time: string = '';

  @Output() closeNewTaskAdder = new EventEmitter<string>();

  emitError(data: string) {
    this.closeNewTaskAdder.emit(data);
  }

  submitButtonClicked() {
    let result = ``;
    let error = false;
    if (!checkUserInput(this.initialInvestment)) {
      result += `Initial Investment is not a number \n`;
      error = true;
    }

    if (!checkUserInput(this.annualInvestment)) {
      result += `Annual Investment is not a number \n`;
      error = true;
    }

    if (!checkUserInput(this.expectedReturn)) {
      result += `Expected return is not a number \n`;
      error = true;
    }

    if (!checkUserInput(this.time)) {
      result += `Time is not a number \n`;
      error = true;
    }

    this.emitError(result);
  }
}
