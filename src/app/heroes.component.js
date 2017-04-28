/** Allgemeine Fragen:
 * Tastenkürzel Zeile markieren? (zum Kopieren)
 * Wie einen grösseren Abschnitt in etwas wrappen?
 * Wie eine umbenannte Property an allen benutzten Stellen umbenennen? (refactoring hero -> selectedHero)
 * Wie Seed korrekt kopieren?
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
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
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    //methods
    //erst durch diese Methode wird getHeroes wirklich gecallt (lifecycle calls, interface OnInit)
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    /*call the service, get the data, synchronous
    getHeroes(): void {
      this.heroes = this.heroService.getHeroes();
    }
    */
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        /**view*/
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"],
        // {{ = interpolation (one-way data binding)
        // "You wrote a multi-line template using ES2015's template literals to make the template readable."
        // -> Where exactly did that happen? What does it mean??
        template: "\n    <h2>My Heroes</h2>\n    \n    <ul class = \"heroes\">\n    \n      <!-- * = <li> is a master template = renders an <li> instance for each array element-->\n      <!-- let hero = hero is input variable. variable props can be accessed within template-->\n      \n      <!-- class binding (CSS) -->\n      <!-- When hero === selectedHero is true, Angular adds the \"selected\" CSS class from styles above-->\n      \n      <!-- click event binding. Master (master/detail)-->\n      <!-- calls the onSelect method and passes the hero variable -->\n      <!-- ?? \"Click event is the target\" Why target? -->\n      \n      <li *ngFor=\"let hero of heroes\"\n       [class.selected]=\"hero === selectedHero\"\n       (click)=\"onSelect (hero)\">\n        <span class=\"badge\">{{hero.id}}</span>\n        {{hero.name}}\n      </li>\n    </ul>\n    \n    <!-- Binds the selectedHero prop of the HeroesComponent to the hero prop of the HeroDetailComponent -->\n    <!-- ? How does it know where to look for hero? 1. hero-detail -> ...?-->\n    <hero-detail [hero]=\"selectedHero\"></hero-detail>\n    \n  ",
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map