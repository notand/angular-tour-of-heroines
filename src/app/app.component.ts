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
    <a routerLink="/dashboard"
    routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroines"
    routerLinkActive="active">Heroines</a> <!--RouterLink directive-->
    </nav>
    <router-outlet></router-outlet><!--Hier werden in app.module definierte Router-Components angezeigt -->
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  //props
  title = 'Tour of Heroines';

}
