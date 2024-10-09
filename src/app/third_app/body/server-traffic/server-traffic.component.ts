import { Component, input } from '@angular/core';

@Component({
  selector: 'app-server-traffic',
  standalone: true,
  imports: [],
  templateUrl: './server-traffic.component.html',
  styleUrl: './server-traffic.component.css',
})
export class ServerTrafficComponent {
  dummyTrafficData = input.required<{ id: string; value: number }[]>();
  get maxTraffic() {
    return Math.max(...this.dummyTrafficData().map((data) => data.value));
  }
}
