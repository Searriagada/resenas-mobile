import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-eliminar-pelicula',
  templateUrl: './eliminar-pelicula.page.html',
  styleUrls: ['./eliminar-pelicula.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EliminarPeliculaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
