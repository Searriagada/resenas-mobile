import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarPeliculaPage } from './agregar-pelicula.page';

describe('AgregarPeliculaPage', () => {
  let component: AgregarPeliculaPage;
  let fixture: ComponentFixture<AgregarPeliculaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
