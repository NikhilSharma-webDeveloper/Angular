import { Component, input } from '@angular/core';
import { BodyWrapperComponent } from './body-wrapper/body-wrapper.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { ServerTrafficComponent } from './server-traffic/server-traffic.component';
import { ServerStatusComponent } from './server-status/server-status.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    BodyWrapperComponent,
    SupportTicketsComponent,
    ServerTrafficComponent,
    ServerStatusComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  dummyTrafficData = input.required<{ id: string; value: number }[]>();
  currentStatus = input.required<string>();

  get maxTraffic() {
    return Math.max(...this.dummyTrafficData().map((data) => data.value));
  }
}
