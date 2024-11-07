import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarPeliculaPage } from './eliminar-pelicula.page';

describe('EliminarPeliculaPage', () => {
  let component: EliminarPeliculaPage;
  let fixture: ComponentFixture<EliminarPeliculaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
