/**
 * Created by user on 30/5/17.
 */

import { Http , Response} from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { AppComponent } from './app.component';
@Injectable()
export class GenreSearchService {

  constructor(private http: Http) {
  }

  getGenre() {
    console.log("get genre called");
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=75a503dc03102bc9404dae529a6fa1c3&language=en-US';
    return this.http.get(url).map((response: Response) => response.json());
  }
  //
  // getGenreNames(array) {
  //
  //      array.forEach((data) => {
  //
  //       console.log(" gnn : ", this.gnre.genre);
  //        // console.log(" genre is : " + data );
  //
  //      });
  // }
}

