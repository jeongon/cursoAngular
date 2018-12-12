import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationType } from '../common-app/notification.service';
import { LoggerService } from 'src/indra-core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Hola Mundo';
  constructor(private notify: NotificationService, private out: LoggerService) {


  }

  ngOnInit() {
    this.notify.add('Esto es una notificacion de error');
    this.notify.add('Esto es una notificacion de error', NotificationType.warn);
    this.notify.remove(0);
    this.notify.add(null);
    this.notify.remove(0);
    this.out.info('es info');
    this.out.warn('es warn');
    this.out.error('es error');
    this.out.log('es log');
  }

}
