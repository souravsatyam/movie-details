import { Component } from '@angular/core';
import { MovieListService } from './movie-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imdbhacker';
  movieList: any = [];
  constructor(private movieService: MovieListService) {
      this.getMovieList();
  }

  getMovieList() {
    this.movieService.getMovieList().subscribe((data: any) => {
      console.log("Data is ", data);
      this.movieList = data;
    });
  }

  
}
