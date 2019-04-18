import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { giphySearchComponent } from './giphy/giphy-search/giphy-search.component';

@NgModule({
  declarations: [ AppComponent, HelloComponent, giphySearchComponent ],
  imports:      [ BrowserModule, FormsModule ],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
