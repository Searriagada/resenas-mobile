import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarPeliculaPage } from './editar-pelicula.page';

describe('EditarPeliculaPage', () => {
  let component: EditarPeliculaPage;
  let fixture: ComponentFixture<EditarPeliculaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
