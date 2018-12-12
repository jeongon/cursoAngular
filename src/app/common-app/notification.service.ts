import { Injectable } from '@angular/core';
import { LoggerService } from 'src/indra-core';

export enum NotificationType{
  error = 'error', warn= 'warn', info= 'info', log= 'log'
}
export class Notification {

  constructor(private id: number,
  private message: string,
  private type: NotificationType = NotificationType.error  ) { }

  public get Id() { return this.id; }
  public set Id(valor: number) {this.id = valor; }

  public get Message() { return this.message; }
  public set Message(valor: string) {this.message = valor; }

  public get Type() { return this.type; }
  public set Type(valor: NotificationType) {this.type = valor; }

}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private lista: Array<Notification> = [];

  // inyectamos el LoggerService
  constructor(private out: LoggerService) { }

  // clonamos el listado para evitar modificar el original
  public get Listado() { return Object.assign([], this.lista); }

  public get HayNotificaciones() { return this.lista.length > 0; }

  public add(msg: string, type: NotificationType= NotificationType.error ): void {

      if (!msg) {
        this.out.error('Falta mensaje!!!!');
      }
      const key = this.lista.length ? this.lista[this.lista.length - 1].Id + 1 : 1;

      this.lista.push(new Notification(key, msg, type));

      if (type === NotificationType.error) {
          this.out.error(`NOTIFICATION: ${msg}`);
      }
  }


  public remove(index: number): void {
    if (0 <= index && index < this.lista.length){
      this.lista.splice(index, 1);
    } else {
      this.out.error('Indice out of range');
    }
  }


  public clear(): void {
      if (this.HayNotificaciones) {
        this.lista.splice(0);
      }

    }


}
