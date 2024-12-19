import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonList, IonItem, IonLabel, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonThumbnail, IonButton } from '@ionic/angular/standalone';

// Define la estructura de una película con sus atributos
export interface Pelicula {
  titulo: String,
  añolanzamiento: Date,
  director: String,
  genero: String,
  sinopsis: String,
  duracion: number,
  imagenUrl: String
}

@Component({
  selector: 'app-editar-pelicula',  // Define el selector del componente
  templateUrl: './editar-pelicula.page.html',  // Vincula la plantilla HTML
  styleUrls: ['./editar-pelicula.page.scss'],  // Vincula el archivo de estilo CSS
  standalone: true,  // El componente es independiente
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonThumbnail, IonButton]  // Importa los módulos necesarios de Ionic y Angular
})
export class EditarPeliculaPage implements OnInit {

  // Lista de películas con su respectiva información
  peliculas: Pelicula[] = [
    {
      titulo: 'El Gran Escape',
      añolanzamiento: new Date('1963-07-04'),
      director: 'John Sturges',
      genero: 'Aventura',
      sinopsis: 'Un grupo de prisioneros de guerra planea una fuga audaz de un campo de concentración durante la Segunda Guerra Mundial.',
      duracion: 172,
      imagenUrl: "https://m.media-amazon.com/images/S/pv-target-images/88a06ea53ddbc0396ef0fe85aed1422b0942e6c3470b29df13eceb2bb45dc94b.jpg"
    },
    {
      titulo: 'La Vida es Bella',
      añolanzamiento: new Date('1997-12-20'),
      director: 'Roberto Benigni',
      genero: 'Drama',
      sinopsis: 'Un padre utiliza la imaginación para proteger a su hijo de los horrores de un campo de concentración nazi.',
      duracion: 116,
      imagenUrl: "https://upload.wikimedia.org/wikipedia/en/7/7c/Vitaebella.jpg"
    },
    {
      titulo: 'El Padrino',
      añolanzamiento: new Date('1972-03-24'),
      director: 'Francis Ford Coppola',
      genero: 'Crimen',
      sinopsis: 'La historia de la familia mafiosa Corleone y la lucha de poder dentro del crimen organizado.',
      duracion: 175,
      imagenUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
    },
    {
      titulo: 'Inception',
      añolanzamiento: new Date('2010-07-16'),
      director: 'Christopher Nolan',
      genero: 'Ciencia Ficción',
      sinopsis: 'Un ladrón que roba secretos a través de los sueños debe realizar una compleja misión de inserción de ideas.',
      duracion: 148,
      imagenUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg"
    }
  ]

  constructor() { }

  // Se ejecuta cuando el componente es inicializado
  ngOnInit() {
  }

  // Método para eliminar una película de la lista
  eliminarPelicula(index: number) {
    this.peliculas.splice(index, 1);  // Elimina la película en la posición 'index'
  }

}