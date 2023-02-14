import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MovieslistComponent } from './pages/movieslist/movieslist.component';

const routes: Routes = [
  { path: "", component: MovieslistComponent },
  { path: "movie/:id",component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
