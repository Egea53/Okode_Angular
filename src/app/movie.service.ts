import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  queery!: String;
  public baseUrl = "https://api.themoviedb.org/3/search/movie?api_key=f54ee04176ca31cf8ae0a0353198fbea&language=en-US&page=1&include_adult=false&query=";

  constructor(private httpClient: HttpClient) { }

  getMovies(queery:any): Observable<any>   { 
    console.log(this.baseUrl+queery);
    return this.httpClient.get(this.baseUrl+queery); 
   }
}