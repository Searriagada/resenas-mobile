import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar, IonCard, IonCardContent, IonCardTitle, IonItem, IonLabel, IonRow, IonCol, IonCardHeader  } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // Importa el servicio Router para manejar la navegación entre páginas
import { StorageService } from '../../service/storage.service'; // Importa el servicio StorageService para almacenar los datos de los usuarios
@Component({
  selector: 'app-agregar-usuario',  // Define el selector del componente
  templateUrl: './agregar-usuario.page.html',  // Vincula el archivo de plantilla HTML
  styleUrls: ['./agregar-usuario.page.scss'],  // Vincula el archivo de estilo CSS
  standalone: true,  // El componente se maneja de forma independiente
  imports: [IonContent, IonHeader, IonTitle, IonInput, IonButton, IonSelect, IonSelectOption, IonToolbar, CommonModule, FormsModule, IonCard, IonCardContent, IonCardTitle, IonItem, IonLabel, IonRow, IonCol, IonCardHeader ]  // Importa los módulos necesarios de Ionic y Angular
})
export class AgregarUsuarioPage implements OnInit {
  email:string='';  // Variable para almacenar el correo electrónico
  password:string='';  // Variable para almacenar la contraseña
  firstName:string='';  // Variable para almacenar el nombre
  birthday:string='';  // Variable para almacenar el apellido
  confirmPassword:string='';  // Variable para almacenar la confirmación de la contraseña

  // Constructor que inyecta el servicio Router para realizar la navegación
  constructor(private router: Router, private storage:StorageService) { }

  // Método que se ejecuta cuando el componente se inicializa
  ngOnInit() {
  }

  // Método para navegar a la página 'home' cuando se llama
  
  async register(){
    if(this.password !== this.confirmPassword){
      console.log('Las contraseñas no coinciden');
      return;
    }
    const user ={
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      birthday: this.birthday
    }
    await this.storage.registerUser(this.email, this.password, this.firstName, this.birthday);
      this.router.navigate(['/home']);
  }
  cambiarPagina() {
    this.router.navigate(['/home']);  // Redirige a la página de inicio
  }
}
