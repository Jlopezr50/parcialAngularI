import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [
    FooterComponent,
    EncabezadoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[FooterComponent, EncabezadoComponent]
})
export class EstructuraModule { }
