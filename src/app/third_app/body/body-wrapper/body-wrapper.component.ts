import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-body-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './body-wrapper.component.html',
  styleUrl: './body-wrapper.component.css',
})
export class BodyWrapperComponent {
  @Input({ required: true }) image!: string;
  @Input({ required: true }) title!: string;
}
