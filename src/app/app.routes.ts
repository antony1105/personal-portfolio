import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  // Add routes for other components here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }