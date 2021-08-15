import { Component, OnInit } from '@angular/core';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.css']
})
export class ElementosComponent implements OnInit {

  constructor(public modal:NgbModal) { }
  elemento1 = 'Conoce todos los detalles del nuevo Bugatti Chiron Pur Sport. Acompaña a Jaime Gabaldoni en su experiencia #ABordo de esta versión más ágil del Chiron. El espectacular super carro de US$4,000,000.';
  elemento2 = 'Conoce todos los detalles del nuevo Ford Mustang Mach-E 2021. Acompaña a Jaime Gabaldoni en su experiencia #ABordo de este nuevo -y controversial- Ford Mustang. Por primera vez ofrecen una versión 100% eléctrica de uno de los clásicos ‘Pony Cars’ americanos.';
  elemento3 = 'Conoce todos los detalles del nuevo McLaren GT. Acompaña a Jaime Gabaldoni en su experiencia #ABordo de este nuevo super auto ‘Grand Tourer’ ingles. Pensado para quienes quieren disfrutar de un super deportivo con motor V8 twin-turbo capaz producir hasta 612 HP ofrecido por un precio inicial de $213,195 en EEUU.';
  elemento4 = 'Conoce todos los detalles del nuevo Ram 1500 TRX 2021. Acompaña a Jaime Gabaldoni en su experiencia #ABordo de la nueva camioneta pickup deportiva de Ram. Diseñada con un objetivo en mente: devorar al Ford Raptor. Para ello trae el motor ‘Hellcat’ V8 de 6.2 lts. capaz producir hasta 702 HP ofrecido por un precio inicial de $72,800 en EEUU.\n';
  elemento5 = 'Conoce todos los detalles del nuevo Cadillac Escalade 2021. Acompaña a Jaime Gabaldoni en su experiencia #ABordo del remodelado #Escalade con motor V8 de 6.2 lts. capaz producir hasta 420 HP ofrecido por un precio inicial de $80,500 en EEUU.';
  elemento6 = 'Conoce todos los detalles del Ford Mustang Shelby GT500 2020, uno de los deportivos más esperados y el Mustang más poderoso de todos los tiempos. Su motor V8 supercargado es capaz de acelerarlo hasta 60mph en solo 3.3 segundos, alcanzando hasta 180 mph (290 km/h). Jaime Gabaldoni nos cuenta su experiencia #ABordo de este super-Mustang.\n';
  elemento7 = 'Conoce todos los detalles del Polaris Slingshot 2020, la segunda generación del vehículo que creo oficialmente el segmento ‘AutoCar’ en EE.UU. Jaime Gabaldoni nos trae todos los detalles de la maquina y su experiencia #Abordo de este.\n';

  ngOnInit(): void {
  }

}
