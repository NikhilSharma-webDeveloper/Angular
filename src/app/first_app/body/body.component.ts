import { Component, Input } from '@angular/core';
import { User } from './user/user.component';
import { Tasks } from './tasks/tasks.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { FormDataType } from './tasks/dataType.model';

import { TasksService } from './services/tasks.service';

export interface UserType {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [User, Tasks, AddNewTaskComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  userSelected?: string;
  newTaskAdder = false;

  @Input({ required: true }) userData: UserType[] | undefined;

  constructor(private service: TasksService) {}

  get userName() {
    let result;
    this.userData?.forEach((value) => {
      if (value.id === this.userSelected) {
        result = value.name;
      }
    });
    return result;
  }

  get taskData() {
    return this.service.taskData;
  }
  onSelectUser(id: string) {
    this.userSelected = id;
  }

  onNewTaskAdder() {
    this.newTaskAdder = !this.newTaskAdder;
  }
}
