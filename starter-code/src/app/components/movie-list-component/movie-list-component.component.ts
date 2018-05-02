import { Component, OnInit } from '@angular/core';
import { MovieInfoService } from '../../services/movie-info.service';

@Component({
  selector: 'app-movie-list-component',
  templateUrl: './movie-list-component.component.html',
  styleUrls: ['./movie-list-component.component.css']
})
export class MovieListComponentComponent implements OnInit {
  movies: Object = []

  constructor(private movieInfoService: MovieInfoService) { }

  ngOnInit() {
    this.movies = this.movieInfoService.getMovies();
  }

}
