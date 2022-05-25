import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'movie-list' },
  { path: 'movie-list', component: MovieListComponent },
  { path: 'movie-details/:title', component: MovieDetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}