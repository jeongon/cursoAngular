import { Component } from '@angular/core';
import { NotificationService } from './common-app/notification.service';
import { LoggerService } from 'src/indra-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hola mundo';


  constructor(notify: NotificationService, out: LoggerService) {
    notify.add('Esto es una notificacion de error');
    notify.remove(0);
    notify.add(null);
    notify.remove(0);
    out.info('es info');
    out.warn('es warn');
    out.error('es error');
    out.log('es log');

  }

}
