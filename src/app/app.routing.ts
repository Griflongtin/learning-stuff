import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { WorksComponent } from './works/works.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,

  },
  {
     path: 'work',
     component: WorksComponent
   }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
