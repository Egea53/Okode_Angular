import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/movie.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie = new Movie();
  title! : String; 
    constructor(private route: ActivatedRoute, private router: Router, private movieService:MovieService ) { }
  
    ngOnInit() {
  
      this.title = this.route.snapshot.params['title'];
      console.log (this.title);
      this.movieService.getMovies(this.title).subscribe(data => {
        console.log(data);
        this.movie = data.results[0];
      })
    }

  
}

