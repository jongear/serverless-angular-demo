import {Injectable} from '@angular/core';
import {HEROES}     from './hero.service.mock';
import {Http, Response} from '@angular/http';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class HeroService {

  constructor(public http: Http, public jsonp: Jsonp){

  }

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(id: number) {

    return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );
  }
}
