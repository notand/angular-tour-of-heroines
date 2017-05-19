/**
 * Created by andrea on 19.05.17.
 */

// routing module:
// no declarations (is the job of the app module)
// if there are guard services (to prevent certain navigation): add module providers

import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./dashboard.component";
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

// pulls the routes into a variable (for clarification)

const routes: Routes = [
  {
    path: '', //Startseite auf Dashboard umleiten
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroines', //URL path
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id', //:id = placeholder for a specific hero.id
    component: HeroDetailComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule]
})

export class AppRoutingModule{}
