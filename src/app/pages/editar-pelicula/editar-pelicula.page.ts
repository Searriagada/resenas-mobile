import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.page.html',
  styleUrls: ['./editar-pelicula.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditarPeliculaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
