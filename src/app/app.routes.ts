import { Routes } from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {PeliculaComponent} from "./components/pelicula/pelicula.component";

export const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'peliculas', component: PeliculaComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'inicio'
  }
];
