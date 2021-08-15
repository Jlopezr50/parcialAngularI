import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaImagenesComponent } from './pagina-imagenes/pagina-imagenes.component';
import { ElementosComponent } from './elementos/elementos.component';
import {NgbButtonsModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    PaginaImagenesComponent,
    ElementosComponent
  ],
  imports: [
    CommonModule,
    NgbButtonsModule,
  ],
  exports: [PaginaImagenesComponent, ElementosComponent]
})
export class ContenidoModule { }
