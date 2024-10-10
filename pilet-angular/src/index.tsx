import 'core-js/proposals/reflect-metadata';
import '@angular/compiler';
import { defineNgModule, fromNg } from 'piral-ng/convert';
import { AppModule } from './app/app.module';
import { PageComponent } from './app/page.component';
import { MenuComponent } from './app/menu.component';
import type { PiletApi } from 'angular-app';
import { from } from 'rxjs';
import { TileComponentComponent } from './app/tile-component/tile-component.component';

export function setup(app: PiletApi) {
  defineNgModule(AppModule, {
    // remove the following if you actually want to enable zone.js
    ngZone: 'noop',
  });

  app.registerMenu(fromNg(MenuComponent));
  app.registerTile('test',fromNg(TileComponentComponent) )

  app.registerPage('/sample', fromNg(PageComponent));
}
