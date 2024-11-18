import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { createOutline, personAddOutline, videocam, listOutline } from 'ionicons/icons';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonTab, IonTabBar, IonTabButton, IonIcon, IonTabs } from '@ionic/angular/standalone';
import{Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonTab, IonTabBar, IonTabButton, IonIcon, IonTabs],
})
export class HomePage {
  constructor(private router:Router) {
    addIcons({ createOutline, personAddOutline, videocam, listOutline });
  }
  listarPelicula(){
    this.router.navigate(['/listar-pelicula'])
  }

  iniciarSesion(){
    this.router.navigate(['/iniciar-sesion'])
  }

  nuevaPelicula(){
    this.router.navigate(['/agregar-pelicula'])
  }

  editarPelicula(){
    this.router.navigate(['/editar-pelicula'])
  }
}
