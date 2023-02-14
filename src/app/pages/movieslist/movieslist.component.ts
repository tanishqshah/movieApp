import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  movies: any;
  constructor(private movieservice: MoviesService) { }
  
  ngOnInit() {
    this.movieservice.getMovies().subscribe((response) => {
      this.movies = response;
      console.log(response);
    })
  }
}
