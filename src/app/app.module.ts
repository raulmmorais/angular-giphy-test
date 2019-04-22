import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { giphySearchComponentModule } from './giphy/giphy-search/giphy-search.module';

@NgModule({
  declarations: [ AppComponent, HelloComponent ],
  imports:      [ CommonModule, BrowserModule, HttpModule, FormsModule, giphySearchComponentModule ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
