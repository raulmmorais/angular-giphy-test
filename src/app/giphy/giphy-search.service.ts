import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class GiphySearchService {

  constructor(private http: Http){}

  searchGiphy(limit: string, term: string): Observable<Response>{
    console.log('Pesquisar Giphy foi chamado, Termo: ' + term + ' Limite: ' + limit);
    const url = 'https://api.giphy.com/v1/gifs/search?q='+term+'&api_key=2AkDPZXuL2gFoky6F21aO90Jp3g2w2jF&limit=' + limit;
    return this.http.get(url);
  }

}