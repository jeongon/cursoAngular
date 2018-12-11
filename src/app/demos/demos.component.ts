import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../common-app/notification.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  public nombre: string = 'Mundoloco';
  public listado = [
    {id: 1, nombre: 'Madrid'},
    {id: 2, nombre: 'barcelona'},
    {id: 3, nombre: 'AlavA'},
    {id: 4, nombre: 'LOGROÑO'},
  ];

  public idProvincia = 2;

public resultado: string = null;
public visible = true;
public estetica = {error: true, importante: false, urgente: true};


  constructor(public notify: NotificationService) { }

  ngOnInit() {


  }

  public saluda(){
    this.resultado = `Hola ${this.nombre}`;
  }

  public despide (){
    this.resultado = `Adios ${this.nombre}`;
  }


  public di (algo: string ){
    this.resultado = `Diciendo ${this.nombre}  elque:${algo}`;
  }

  public cambia() {
    this.visible = !this.visible;
    this.estetica.error = !this.estetica.error;
    this.estetica.importante = !this.estetica.importante;

  }

  public calcula(a: number, b: number){
    return a + b;
  }



  public add(provincia: string): void {

    const key = this.listado.length ? this.listado[this.listado.length - 1].id + 1 : 1;

    this.listado.push({id: key, nombre: provincia});

    this.idProvincia = key;
  }


}
