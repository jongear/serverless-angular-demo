import {bootstrap} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {ROUTER_PROVIDERS} from '@angular/router';
import { JSONP_PROVIDERS }  from '@angular/http';
import {HeroService} from './app/hero/hero.service';
import {AppComponent} from './app/app.component';

import {HTTP_BINDINGS} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

if (process.env.ENV === 'production') {
  enableProdMode();
}
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_BINDINGS,
  JSONP_PROVIDERS,
  HeroService
]);

