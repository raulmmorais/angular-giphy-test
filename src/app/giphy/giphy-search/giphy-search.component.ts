import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { GiphySearchService } from '../giphy-search.service';

@Component({
  selector: 'giphy-search',
  templateUrl: 'giphy-search.component.html'
})

export class giphySearchComponent implements OnInit{

  gifs: any[] = [];
  limit: string;
  term: string;

  constructor(private giphySearchService: GiphySearchService){}

  ngOnInit(){
  }

  pesquisarGiphy(){
    //this.limit = '5';
    //this.term = 'happy';
    this.giphySearchService.searchGiphy(this.limit, this.term).subscribe(
      (response: Response) => {this.gifs = response.json().data}
    );
    return false;
  }
}
