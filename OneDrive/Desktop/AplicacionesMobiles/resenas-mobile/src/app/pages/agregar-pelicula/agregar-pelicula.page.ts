import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // Importa el servicio Router para la navegación
import { TakePhotoService } from '../../service/take-photo.service'; // Importa el servicio de toma de fotos

@Component({
  selector: 'app-agregar-pelicula',  // Define el selector del componente
  templateUrl: './agregar-pelicula.page.html',  // Define la plantilla HTML
  styleUrls: ['./agregar-pelicula.page.scss'],  // Define el archivo de estilo CSS
  standalone: true,  // El componente se maneja de forma independiente
  imports: [IonContent, IonHeader, IonTitle, IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonRow, IonCol, IonText ]  // Importa los módulos necesarios para Ionic y Angular
})
export class AgregarPeliculaPage implements OnInit {
  photo: string | null = null;
  location: { latitude: number; longitude: number } | null = null;
  address: string | null = null;
  photoError: string | null = null; // Para manejar errores en la captura de la foto
  tituloPelicula: string = '';
  fechaLanzamiento: string = '';
  duracion: string = '';
  director: string = '';
  genero: string = '';
  sinopsis: string = '';

  constructor(private router: Router, private takePhotoService: TakePhotoService) { }

  ngOnInit() {
    // Aquí puedes inicializar cualquier dato adicional si es necesario
  }

  async capturePhoto() {
    try {
      const result = await this.takePhotoService.takePhoto();
      if (result) {
        this.photo = result.photo;
        this.location = result.location;
        this.address = result.address;
      } else {
        this.photoError = 'No se pudo capturar la foto. Intenta nuevamente.';
      }
    } catch (error) {
      console.error('Error al capturar la foto:', error);
      this.photoError = 'Ocurrió un error al intentar tomar la foto.';
    }
  }

  openSelector(selector: any) {
    selector.open();
  }

  // Método para navegar a la página 'home' cuando se llama
  cambiarPagina() {
    this.router.navigate(['/home']);  // Navega hacia la página de inicio
  }

  // Método para mostrar la dirección si existe
  mostrarDireccion() {
    return this.address ? this.address : 'Dirección no disponible';
  }

  onSubmit(movieForm: any) {
    if (movieForm.valid) {
      console.log('Formulario enviado:', this.tituloPelicula, this.fechaLanzamiento, this.director, this.genero, this.sinopsis);
    } else {
      console.log('Formulario no válido');
    }
  }
}
