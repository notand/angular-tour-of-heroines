"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by andrea on 23.04.17.
 */
var core_1 = require("@angular/core");
//router component
var AppComponent = (function () {
    function AppComponent() {
        //props
        this.title = 'Tour of Heroines';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <nav>\n    <a routerLink=\"/dashboard\"\n    routerLinkActive=\"active\">Dashboard</a>\n    <a routerLink=\"/heroines\"\n    routerLinkActive=\"active\">Heroines</a> <!--RouterLink directive-->\n    </nav>\n    <router-outlet></router-outlet><!--Hier werden in app.module definierte Router-Components angezeigt -->\n  ",
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map