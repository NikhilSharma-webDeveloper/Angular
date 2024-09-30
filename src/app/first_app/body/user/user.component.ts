import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserType } from '../body.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class User {
  @Input({ required: true }) selected!: boolean;

  @Input({ required: true })
  user: UserType | undefined;

  @Output() selectUser = new EventEmitter();

  get userImage() {
    return 'users/' + this.user?.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user?.id);
  }
}
