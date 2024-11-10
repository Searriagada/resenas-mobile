import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // Importa el servicio Router para la navegación

@Component({
  selector: 'app-agregar-pelicula',  // Define el selector del componente
  templateUrl: './agregar-pelicula.page.html',  // Define la plantilla HTML
  styleUrls: ['./agregar-pelicula.page.scss'],  // Define el archivo de estilo CSS
  standalone: true,  // El componente se maneja de forma independiente
  imports: [IonContent, IonHeader, IonTitle, IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar, CommonModule, FormsModule]  // Importa los módulos necesarios para Ionic y Angular
})
export class AgregarPeliculaPage implements OnInit {

  // Constructor que inyecta el servicio Router para la navegación entre páginas
  constructor(private router: Router) { }

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit() {
  }

  // Método para navegar a la página 'home' cuando se llama
  cambiarPagina() {
    this.router.navigate(['/home']);  // Navega hacia la página de inicio
  }
}
