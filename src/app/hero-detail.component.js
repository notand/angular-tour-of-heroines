/**
 * Created by andrea on 19.04.17.
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
//?? Why must I define exactly which decorators I want to import?
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var hero_1 = require("./hero");
var hero_service_1 = require("./hero.service");
// Angular metadata
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    return HeroDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", hero_1.Hero)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    core_1.Component({
        //CSS selector: tag name of the element that represents the HeroDetailComponent in other files
        selector: 'hero-detail',
        template: "\n\n    <!-- div exists only when there is a selectedHero, otherwise reference fails (not initiated below)-->\n    <!-- ngIf = built-in structural directive -->\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div>\n        <label>id: </label> {{hero.id}}\n      </div>\n       <div>\n         <label>name: </label>\n         <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n        </div>\n     </div>\n\n\n  "
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute,
        common_1.Location])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
/*
 <label>name: </label>

 <!-- ngModel: directive-->
 <!-- ngModel: two-way data binding-->
 <!-- ngModel: "propagates changes to every other binding of the selectedHero.name"
 ?? From here (not from the object?), as an extra??
 Any other way of binding that does not propagate?-->
 <input [(ngModel)]="hero.name" placeholder="name">
 */
//# sourceMappingURL=hero-detail.component.js.map