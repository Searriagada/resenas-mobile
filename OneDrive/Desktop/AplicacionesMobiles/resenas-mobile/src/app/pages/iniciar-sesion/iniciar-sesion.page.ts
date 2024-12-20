import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonInput, IonButton, IonToggle, IonInputPasswordToggle,
  IonRow, IonCol, IonText
} from '@ionic/angular/standalone'; // Importa componentes de Ionic para el diseño de la interfaz
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonInput, IonButton, IonToggle, IonInputPasswordToggle, IonRow, IonCol, IonText]
})
export class IniciarSesionPage implements OnInit {

  form!: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required, //EL CAMPO ES REQUERIDO
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required, //EL CAMPO ES REQUERIDO
        Validators.minLength(8)
      ]),
    })
  }

  cambiarPagina() {
    this.router.navigate(['/home']);
  }
  registro() {
    if (this.form.invalid) {
      //QUE PASA SI EL FORMULARIO ES INVALIDO
      this.form.markAllAsTouched()
      return
    }
    this.router.navigate(['/agregar-usuario']);
  }



}

