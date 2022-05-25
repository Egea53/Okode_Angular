import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/movie';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {

  movies!: Movie[];
  movie: Movie = new Movie();
  constructor(private movieService: MovieService, private router: Router,) { }

  onChangeEvent(event: any){
    this.movieService.getMovies(event.target.value).subscribe(data => {
      console.log(data);
      this.movies = data.results;
    })
  }

  movieDetails(title: String) {
    this.router.navigate(['movie-details', title]);
    console.log(title);
   }

}