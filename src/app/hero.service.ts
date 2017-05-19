/**
 * Created by andrea on 23.04.17.
 */

// Injectable is a function
import {Injectable} from '@angular/core';
import { HEROES } from './mock-heroes';
import {Hero} from "./hero";

// Angular may need to inject other dependencies into this service.
//Ensures consistency and future-proofing
@Injectable()

export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  //filters the heroes list from getHeroes() by id
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero =>
      hero.id === id));
  }

  /* synchronous
  getHeroes(): void {
    return HEROES;
  }
  */

}
