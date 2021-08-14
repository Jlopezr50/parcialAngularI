import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaImagenesComponent } from './pagina-imagenes.component';

describe('PaginaImagenesComponent', () => {
  let component: PaginaImagenesComponent;
  let fixture: ComponentFixture<PaginaImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaImagenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
