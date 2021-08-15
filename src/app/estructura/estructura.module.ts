import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import {IonicModule} from "@ionic/angular";
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    EncabezadoComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[FooterComponent, EncabezadoComponent, SidebarComponent]
})
export class EstructuraModule { }
