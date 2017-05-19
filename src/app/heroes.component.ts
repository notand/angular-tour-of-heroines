import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'my-heroes',

  /**view*/
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ] //Array. Can add styles from different locations.
})

export class HeroesComponent implements OnInit  {

  //properties

  heroes: Hero[];
  //not initialized, because default = none selected
  selectedHero: Hero;

  /** Hero object initialization (before click event binding was introduced)
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
   */

  // public property that exposes the heroes for binding
  //type infered from the HEROES array
  //!! unusual: data separated from instantiation (later: external data source)
 // heroes = HEROES;

  //constructor

  //?? defines a private heroService prop, identifies it as a HeroService injection site
  constructor(
    private heroService: HeroService,
    private router: Router) {}

  //methods

  //erst durch diese Methode wird getHeroes wirklich gecallt (lifecycle calls, interface OnInit)
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  /*call the service, get the data, synchronous
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
  */

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


}
