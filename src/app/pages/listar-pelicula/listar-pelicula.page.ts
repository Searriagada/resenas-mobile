import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg,IonFab,IonFabButton,IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // Importa el módulo para la navegación entre rutas
import { Motion } from '@capacitor/motion';
//ICONOS
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.page.html',
  styleUrls: ['./listar-pelicula.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonFab,
    IonFabButton,
    IonIcon
  ],
})
export class ListarPeliculaPage implements OnInit {

  pelicula: any;
  constructor(private router: Router,private http:HttpClient) {
    addIcons({ arrowBackOutline });
   }

  ngOnInit() {
    this.startShakeDetection()
  }

  async startShakeDetection() {
    await Motion.addListener('accel', async (event) => {
      console.log('TEST MOTION');
      const nivel = -1;
      if (
        Math.abs(event.acceleration.x) > nivel &&
        Math.abs(event.acceleration.y) > nivel &&
        Math.abs(event.acceleration.z) > nivel
      ) {
        try {
          const response = await this.http.get<any[]>('https://674a1a34868020296633ad52.mockapi.io/pelicula').toPromise();
          if (response && response.length > 0) {
            this.pelicula = response[0];
          } else {
            console.error('Invalid API response format');
          }
        } catch (error) {
          console.error('Error al obtener datos de la API', error);
        }
      }
    });
  }
  
  goToListar() {
    this.router.navigate(['/listar-cocteles']);
  }
}


