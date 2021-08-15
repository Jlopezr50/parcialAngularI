import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  comentario1='Cuando tienes flojera de dibujar a pulso y lo haces con regla';
  comentario2='Elon y su equipo son GENIOS! Olvidense del producto, como han manejado a los medios de comunicacion durante los ultimos 7 dias...mis respetos!';
  comentario3='Ese weon del elon Musk le bajó los gráficos a esa camioneta pa que fuera más rápida';
  comentario4='Obvio que va a ser mas rapido, si tiene los graficos en minimo xD';
  comentario5='Es muy simple, un auto eléctrico tiene todo el torque disponible desde que presionas el acelerador.';
  ngOnInit(): void {
  }

}
