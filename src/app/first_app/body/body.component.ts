import { Component, Input } from '@angular/core';
import { User } from './user/user.component';
import { Tasks } from './tasks/tasks.component';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { FormDataType } from './tasks/dataType.model';
import { dummyTasks } from './dummy_users_tasks';

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
  taskData = dummyTasks;
  userSelected?: string;
  newTaskAdder = false;

  @Input({ required: true }) userData: UserType[] | undefined;

  get userName() {
    let result;
    this.userData?.forEach((value) => {
      if (value.id === this.userSelected) {
        result = value.name;
      }
    });
    return result;
  }

  onSelectUser(id: string) {
    this.userSelected = id;
  }

  onNewTaskAdder() {
    this.newTaskAdder = !this.newTaskAdder;
  }

  addNewTask(data: FormDataType) {
    console.log({
      id: data.date + ' ' + this.userSelected + new Date(),
      userId: this.userSelected + '',
      title: data.title,
      summary: data.title,
      dueDate: data.date,
    });

    this.taskData.push({
      id: data.date + ' ' + this.userSelected + new Date(),
      userId: this.userSelected + '',
      title: data.title,
      summary: data.title,
      dueDate: data.date,
    });

    console.log(this.taskData);
    this.onNewTaskAdder();
  }
  handleCompletedTask(id: string) {
    this.taskData = this.taskData?.filter((value) => {
      if (value.id === id) {
        return false;
      } else {
        return true;
      }
    });
  }
}
