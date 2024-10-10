import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'piral-ng/common';

import { PageComponent } from './page.component';
import { MenuComponent } from './menu.component';
import { TileComponentComponent } from './tile-component/tile-component.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'sample', component: PageComponent },
    ],
  },
];

@NgModule({
  bootstrap: [],
  declarations: [PageComponent, MenuComponent, TileComponentComponent],
  exports: [PageComponent, MenuComponent, TileComponentComponent],
  imports: [BrowserModule, SharedModule, RouterModule.forRoot(routes)],
})
export class AppModule {}
