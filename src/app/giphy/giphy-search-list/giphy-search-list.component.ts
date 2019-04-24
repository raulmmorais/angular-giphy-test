import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector:'giphy-list',
  templateUrl: 'giphy-search-list.component.html'
})

export class GiphySearchListComponent implements OnInit{

  @Input()
  gifsList: any[] = [];

  constructor(){}

  ngOnInit(){}

}