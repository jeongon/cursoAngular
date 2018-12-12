import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})





export class CalculadoraComponent implements OnInit {

  operacion = '';
  resultado = 0;
  historico = '';
  alto = 2;
  constructor() { }


  public addNumber(n: number): void {
    // if (!isNaN( +this.operacion )) {
    //   this.operacion = '';
    // }
    this.operacion += n.toString();
  }

  public addOperator(o: string): void {
    this.operacion += o;
  }

  public getResultado() {

    this.historico += '\n' + this.operacion;
        // tslint:disable-next-line:no-eval
    this.operacion = eval(this.operacion);
    this.historico += '=' + this.operacion;
    this.alto++;

  }

  public exeCE() {
    this.operacion = '';
  }
  ngOnInit() {
  }

}
