import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {PeliculaService} from "../../services/pelicula.service";

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  constructor(private peliculaService : PeliculaService) { }
  movies : Array<any> = [];
  obtenerPeliculas(){
    this.peliculaService.getMovies().subscribe(
      (data)=>{
        console.log(data)
        this.movies = data;
        console.log(this.movies)
      },(error)=>{
        console.log(error);
      }
    )
  }
}
