import { Component } from '@angular/core';

import { Header } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DUMMY_USERS } from './body/dummy_users';

@Component({
  selector: 'app-root',
  imports: [Header, BodyComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class FirstProject {
  userData = DUMMY_USERS;
}
