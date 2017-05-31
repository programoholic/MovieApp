import { Component } from '@angular/core';
import {MovieSearchService} from './movie-services.component';
import {GenreSearchService} from './genre-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MovieSearchService, GenreSearchService ]
})
export class AppComponent {
  title = 'MovieApp';
  searchText: string;
  movieNameResult = [];
  totalPages: number;
  genre = [];
  buttonIsDsbaled=true;
  constructor(private moviesearchservice: MovieSearchService, private genreService: GenreSearchService) {

  }
    ontype(event: string): void {

    this.buttonIsDsbaled = true;
    const passedString = event;

    if ( /\S/.test( passedString )) {

      this.buttonIsDsbaled = false;
    }

    }
  OnSearch() {
    this.moviesearchservice.getMovie(this.searchText)
      .subscribe(movie => {
        this.movieNameResult = movie.results;
        this.totalPages = movie.total_pages;
      });

    this.genreService.getGenre().subscribe(movieGenre => {
      this.genre = movieGenre.genres;
      console.log(" inside genere service ");


      //    movieGenre.forEach((data) => {
      //
      //      this.genre.push(data);
      // });
      // this.genre = movieGenre;
      // console.log(this.genre);
    });
    // console.log(this.movieNameResult);
    // console.log(this.totalPages);

  }

  scrolld() {
    const page = this.moviesearchservice.num++;
    if (page <= this.totalPages) {

      this.moviesearchservice.getNewData(this.searchText).subscribe(datas => {

        console.log(datas.results);

        (datas.results).forEach((data) => {

          this.movieNameResult.push(data);
          // console.log(data.genre_ids);
          // this.displayGen(data.genre_ids);
        });

      });
    }
  }

  getGenreNames(elements) {

    const obj = [];

    elements.forEach((data) => {

      this.genre.forEach((dt) => {
        if (data === dt.id)
          obj.push(dt.name);
      });
    });


     // console.log("genre classed");
     // console.log( elements);



     // elements.forEach()

    // elements.forEach((data) => {
    //
    //     this.genre.find((item) => {
    //
    //        return item.id === data;
    //
    //    //
    //  });
    //    // console.log(temp);
    //    // obj.push(temp.name);
    //  });
    // // //
    //   let arr= [];
    // elements.forEach((data) => {
    //
    //   this.genre.forEach((dt) => {
    //        if ( data === dt.id)
    //            obj.push(dt.name);
    //   });
    // //
    // //   if(this.genre)
    // //   console.log(" gnn : ", this.genre);
    // //   // console.log(" genre is : " + data );
    // //
    // // });
    // //
    // //
    // //  let genreObj = this.genre.find((item) => { return  item.id===18});
    // //      console.log(genreObj);
    // console.log(" Object : " , obj);

    return obj;
  }

  AddFavourite() {

       

  }

}



