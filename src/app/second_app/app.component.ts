import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, ErrorComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class SecondProjectComponent {
  error: boolean = false;
}
