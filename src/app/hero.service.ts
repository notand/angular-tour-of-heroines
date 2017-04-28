/**
 * Created by andrea on 23.04.17.
 */

// Injectable is a function
import {Injectable} from '@angular/core';
import { HEROES } from './mock-heroes';
import {Hero} from "./hero";

//? tells TypeScript to emit metadata about the service. Angular may need to inject other dependencies into this service.
//? ensures consistency and future-proofing
@Injectable()

export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  /* synchronous
  getHeroes(): void {
    return HEROES;
  }
  */

}
