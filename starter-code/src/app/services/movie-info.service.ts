import { Injectable } from '@angular/core';
import movieList from '../../sample-movies';

@Injectable()
export class MovieInfoService {

  movies: Object []



  constructor() {
    this.movies = movieList;
  }

  getMovies () {
    return this.movies
  }

  getMovie(id) {

  }
}
