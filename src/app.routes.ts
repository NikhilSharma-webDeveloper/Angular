import { Routes } from '@angular/router';

import { FirstProject } from './app/first_app/app.component';
import { SecondProjectComponent } from './app/second_app/app.component';
import { LandingPageComponent } from './app/landing-page/landing-page.component';
import { ThirdProject } from './app/third_app/app.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'tasks',
    component: FirstProject,
  },
  {
    path: 'investmentCalculator',
    component: SecondProjectComponent,
  },
  {
    path: 'dashboard',
    component: ThirdProject,
  },
  // { path: '**', redirectTo: '' },
];
