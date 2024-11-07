import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarPeliculaPage } from './listar-pelicula.page';

describe('ListarPeliculaPage', () => {
  let component: ListarPeliculaPage;
  let fixture: ComponentFixture<ListarPeliculaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
