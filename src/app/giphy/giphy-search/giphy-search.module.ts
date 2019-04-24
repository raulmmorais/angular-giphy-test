import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { giphySearchComponent } from './giphy-search.component';
import { GiphySearchService } from '../giphy-search.service';
import { GiphySearchListComponentModule } from  '../giphy-search-list/giphy-search-list.module';

@NgModule({
  imports: [ CommonModule, FormsModule, GiphySearchListComponentModule ],
  exports: [ giphySearchComponent ],
  declarations: [ giphySearchComponent ],
  providers: [ GiphySearchService ]
})

export class giphySearchComponentModule{};
