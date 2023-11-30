import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
   { path: 'experience', component: ExperienceComponent },
  // Add more routes here
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
