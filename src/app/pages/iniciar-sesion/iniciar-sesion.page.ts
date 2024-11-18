import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonItem, IonLabel, IonRow, IonCol, IonCardHeader } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardTitle, IonItem, IonLabel, IonRow, IonCol, IonCardHeader]
})
export class IniciarSesionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cambiarPagina() {
    this.router.navigate(['/home']);  
  }
  registro(){
    this.router.navigate(['/agregar-usuario']); 
  }

}
