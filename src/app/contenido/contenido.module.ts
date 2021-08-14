import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaImagenesComponent } from './pagina-imagenes/pagina-imagenes.component';



@NgModule({
  declarations: [
    PaginaImagenesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PaginaImagenesComponent]
})
export class ContenidoModule { }
