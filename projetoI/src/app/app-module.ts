import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Corpo1 } from './corpo-1/corpo-1';

@NgModule({
  declarations: [App, Corpo1],

  imports: [BrowserModule, AppRoutingModule],

  providers: [],

  bootstrap: [App],
})
export class AppModule {}
