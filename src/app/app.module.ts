import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from "./hero.service";
import { DashboardComponent } from "./dashboard.component";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({

  imports:      [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],

  //? Warum muss ich die hero-Klasse nicht deklarieren? Nur directives
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],

  // so that the same instance of a service is available everywhere
  providers: [
    HeroService
  ],

  bootstrap:    [ AppComponent ]
})

export class AppModule { }


//providers array
//Angular creates a fresh instance of the HeroService when it creates the AppComponent.


