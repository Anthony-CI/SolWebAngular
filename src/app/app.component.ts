import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from "./compb/compb.component";
import { CalculadoraComponent } from "./calculadora/calculadora.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CompaComponent, CompbComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aplicacion de Angular 19';
}
