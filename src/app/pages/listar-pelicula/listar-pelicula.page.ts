

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.page.html',
  styleUrls: ['./listar-pelicula.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ListarPeliculaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

