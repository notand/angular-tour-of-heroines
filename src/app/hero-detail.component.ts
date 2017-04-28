/**
 * Created by andrea on 19.04.17.
 */

//?? Why must I define exactly which decorators I want to import?
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import {Hero} from './hero';
import { HeroService } from './hero.service';

// Angular metadata
@Component({
  //CSS selector: tag name of the element that represents the HeroDetailComponent in other files
  selector: 'hero-detail',

  template: `

    <!-- div exists only when there is a selectedHero, otherwise reference fails (not initiated below)-->
    <!-- ngIf = built-in structural directive -->
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div>
        <label>id: </label> {{hero.id}}
      </div>
       <div>
         <label>name: </label>
         <input [(ngModel)]="hero.name" placeholder="name">
        </div>
     </div>


  `

})

export class HeroDetailComponent {

  //?? Hat ne leicht andere Struktur als @Component
  //? "receive (?) a hero object throuh its hero input property, and then bind to that property with its template."
  @Input() hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}
}

/*
 <label>name: </label>

 <!-- ngModel: directive-->
 <!-- ngModel: two-way data binding-->
 <!-- ngModel: "propagates changes to every other binding of the selectedHero.name"
 ?? From here (not from the object?), as an extra??
 Any other way of binding that does not propagate?-->
 <input [(ngModel)]="hero.name" placeholder="name">
 */
