import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectLinks } from './allProjectsLinks';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  projects = ProjectLinks;
}
