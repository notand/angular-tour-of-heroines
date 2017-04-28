/** Allgemeine Fragen:
 * Tastenkürzel Zeile markieren? (zum Kopieren)
 * Wie einen grösseren Abschnitt in etwas wrappen?
 * Wie eine umbenannte Property an allen benutzten Stellen umbenennen? (refactoring hero -> selectedHero)
 * Wie Seed korrekt kopieren?
 */

import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import {HEROES} from "./mock-heroes";

@Component({
  selector: 'my-heroes',

  /**view*/

  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],

  // {{ = interpolation (one-way data binding)
  // "You wrote a multi-line template using ES2015's template literals to make the template readable."
  // -> Where exactly did that happen? What does it mean??

  template: `
    <h2>My Heroes</h2>
    
    <ul class = "heroes">
    
      <!-- * = <li> is a master template = renders an <li> instance for each array element-->
      <!-- let hero = hero is input variable. variable props can be accessed within template-->
      
      <!-- class binding (CSS) -->
      <!-- When hero === selectedHero is true, Angular adds the "selected" CSS class from styles above-->
      
      <!-- click event binding. Master (master/detail)-->
      <!-- calls the onSelect method and passes the hero variable -->
      <!-- ?? "Click event is the target" Why target? -->
      
      <li *ngFor="let hero of heroes"
       [class.selected]="hero === selectedHero"
       (click)="onSelect (hero)">
        <span class="badge">{{hero.id}}</span>
        {{hero.name}}
      </li>
    </ul>
    
    <!-- Binds the selectedHero prop of the HeroesComponent to the hero prop of the HeroDetailComponent -->
    <!-- ? How does it know where to look for hero? 1. hero-detail -> ...?-->
    <hero-detail [hero]="selectedHero"></hero-detail>
    
  `,
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

  //constructors

  //?? defines a private heroService prop, identifies it as a HeroService injectin site
  constructor(private heroService: HeroService) {}

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


}
