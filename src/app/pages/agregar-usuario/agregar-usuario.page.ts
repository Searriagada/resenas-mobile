import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar } from '@ionic/angular/standalone';
import{Router} from '@angular/router'
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.page.html',
  styleUrls: ['./agregar-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle , IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar, CommonModule, FormsModule]

})
export class AgregarUsuarioPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cambiarPagina(){
    this.router.navigate(['/listar-pelicula'])
  }

}
