/**
 * Created by andrea on 19.04.17.
 */

import 'rxjs/add/operator/switchMap';

//?? Why must I define exactly which decorators I want to import?
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import {Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
  //CSS selector: tag name of the element that represents the HeroDetailComponent in other files
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})

export class HeroDetailComponent implements OnInit {

  //? "receive (?) a hero object through its hero input property, and then bind to that property with its template."
  @Input() hero: Hero;

  //?? The switchMap operator maps the id in the Observable route parameters to a new Observable, the result of the HeroService.getHero() method.
  // If a user re-navigates to this component while a getHero request is still processing, switchMap cancels the old request and then calls HeroService.getHero() again.
  // hero id = number. Route parameters = strings. + = JavaScript operator that converts string to number.
  ngOnInit():void {
    this.route.params
      .switchMap((params: Params) =>
        this.heroService.getHero(+params[`id`]))
      .subscribe(hero => this.hero = hero);
  }

  //Inject the services into the constructor, saving their values in private fields
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }
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
