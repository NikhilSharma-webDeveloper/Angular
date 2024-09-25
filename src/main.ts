import { bootstrapApplication } from '@angular/platform-browser';

import { FirstProject } from './app/first_app/app.component';

bootstrapApplication(FirstProject).catch((err) => console.error(err));
