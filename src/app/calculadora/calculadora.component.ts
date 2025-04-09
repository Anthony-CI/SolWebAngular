import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
})
export class CalculadoraComponent {
  numero1: number = 0;
  numero2: number = 0;
  toal: number = 0;
  accion: string="Hola";

  /*
  getNumber1(e: any){
    this.numero1= +e.target.value;
    //console.log(e.target.value)
  }
  getNumber2(e: any){
    this.numero2= +e.target.value;
    //console.log(e.target.value)
  }
*/
  sumar() {
    this.toal = this.numero1 + this.numero2;
    this.accion= "Suma";
  }

  resta() {
    this.toal = this.numero1 - this.numero2;
    this.accion= "Resta";
  }


  multiplicar() {
    this.toal = this.numero1 * this.numero2;
    this.accion= "Multiplicacion";
  }

  dividir() {
    if (this.numero2==0){
      this.accion = "No se puede dividir"
    }else{
      this.toal = this.numero1 / this.numero2;
    this.accion= "Division";
    }
    
  }

  limpiar(){
   this.numero1=0;
   this.numero2=0;
   this.accion="Borrado";
   this.toal=0;
  }


}
