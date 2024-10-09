import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy_users_tasks';
import { FormDataType } from '../tasks/dataType.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  taskData = dummyTasks;
  constructor() {}

  getTasks() {
    return this.taskData;
  }

  getSelectedUserTasks(userId: string | undefined) {
    if (userId == undefined) {
      return;
    }
    let tasks = this.taskData.filter((value) => {
      if (value.userId === userId) {
        return true;
      } else {
        return false;
      }
    });

    return tasks;
  }

  handleCompletedTask(taskId: string) {
    this.taskData = this.taskData?.filter((value) => {
      if (value.id === taskId) {
        return false;
      } else {
        return true;
      }
    });
  }

  addNewTask(data: FormDataType, userId: string | undefined) {
    if (userId === undefined) {
      return;
    }
    this.taskData.push({
      id: data.date + ' ' + userId + new Date(),
      userId: userId + '',
      title: data.title,
      summary: data.title,
      dueDate: data.date,
    });
  }
}
