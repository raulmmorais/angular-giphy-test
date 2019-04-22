import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { giphySearchComponent } from './giphy-search.component';
import { GiphySearchService } from '../giphy-search.service';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  exports: [ giphySearchComponent ],
  declarations: [ giphySearchComponent ],
  providers: [ GiphySearchService ]
})

export class giphySearchComponentModule{};
