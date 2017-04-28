/**
 * Created by andrea on 23.04.17.
 */
import { Component } from "@angular/core";

//router component

@Component ({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a> <!--RouterLink directive-->
    <router-outlet></router-outlet>
    </nav>
  `
})

export class AppComponent {

  //props
  title = 'Tour of Heroes';

}
