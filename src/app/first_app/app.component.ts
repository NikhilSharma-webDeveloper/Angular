import { Component } from '@angular/core';

import { Header } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [Header],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class FirstProject {}
