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
  selector: 'app-listar-pelicula',  // Define el selector del componente
  templateUrl: './listar-pelicula.page.html',  // Vincula la plantilla HTML
  styleUrls: ['./listar-pelicula.page.scss'],  // Vincula el archivo de estilo CSS
  standalone: true,  // El componente es independiente
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonThumbnail, IonButton]  // Importa los módulos necesarios de Ionic y Angular
})
export class ListarPeliculaPage implements OnInit {

  // Lista de películas con su respectiva información
  peliculas: Pelicula[] = [
    {
      titulo: 'El Gran Escape',
      añolanzamiento: new Date('1963-07-04'),
      director: 'John Sturges',
      genero: 'Aventura',
      sinopsis: 'Un grupo de prisioneros de guerra planea una fuga audaz de un campo de concentración durante la Segunda Guerra Mundial.',
      duracion: 172,
      imagenUrl: "https://upload.wikimedia.org/wikipedia/en/7/70/The_Great_Escape_poster.jpg"
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
      imagenUrl: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg"
    }
  ]

  constructor() { }

  // Se ejecuta cuando el componente es inicializado
  ngOnInit() {
  }

  // Método para eliminar una película de la lista
  eliminarCoctel(index: number) {
    this.peliculas.splice(index, 1);  // Elimina la película en la posición 'index'
  }

}
