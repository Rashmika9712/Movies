import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { EditActorsComponent } from './actors/edit-actors/edit-actors.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'genres',
    children: [
      { path: "", component: IndexGenresComponent },
      { path: 'create', component: CreateGenreComponent },
      { path: 'edit/:id', component: EditGenreComponent}
    ]
  },
  { path: 'actors',
    children: [
      { path: "", component: IndexActorsComponent },
      { path: 'create', component:  CreateActorComponent}, 
      { path: 'edit/:id', component: EditActorsComponent}
    ]
  },
  { path: 'movietheaters',
    children: [
      { path: "", component: IndexMovieTheaterComponent },
      { path: 'create', component:  CreateMovieTheaterComponent},
      { path: 'edit/:id', component: EditMovieTheaterComponent}
    ]
  },
  {path:'movies',
    children:[
      { path:'create', component : CreateMovieComponent},
      { path: 'edit/:id', component: EditMovieComponent}
    ]
  },

  {path: '**', redirectTo:''}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
