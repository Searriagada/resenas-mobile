import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'listar-pelicula',
    loadComponent: () => import('./pages/listar-pelicula/listar-pelicula.page').then( m => m.ListarPeliculaPage)
  },
  {
    path: 'agregar-pelicula',
    loadComponent: () => import('./pages/agregar-pelicula/agregar-pelicula.page').then( m => m.AgregarPeliculaPage)
  },
  {
    path: 'editar-pelicula',
    loadComponent: () => import('./pages/editar-pelicula/editar-pelicula.page').then( m => m.EditarPeliculaPage)
  },
  {
    path: 'eliminar-pelicula',
    loadComponent: () => import('./pages/eliminar-pelicula/eliminar-pelicula.page').then( m => m.EliminarPeliculaPage)
  },
  {
    path: 'agregar-usuario',
    loadComponent: () => import('./pages/agregar-usuario/agregar-usuario.page').then( m => m.AgregarUsuarioPage)
  },
  {
    path: 'iniciar-sesion',
    loadComponent: () => import('./pages/iniciar-sesion/iniciar-sesion.page').then( m => m.IniciarSesionPage)
  },  {
    path: 'random',
    loadComponent: () => import('./pages/random/random.page').then( m => m.RandomPage)
  }

];
