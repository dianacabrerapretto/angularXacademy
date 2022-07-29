import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  elemento = false;

  mostrar() {
    this.elemento = true;
  }
  ocultar() {
    this.elemento = false;
  }

  productos = [
    {nombre: 'Harina', costo: 115},
    {nombre: 'Yerba', costo: 450},
    {nombre: 'Garbanzos', costo: 280},
    {nombre:'Alemendras', costo: 380},
  ];
}
