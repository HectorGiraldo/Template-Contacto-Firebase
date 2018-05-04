import 'rxjs/add/operator/map';
import { Mensaje } from '../interface/mensaje.interface';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';




@Injectable()
export class MensajesService {
  info: any = {};

  // tslint:disable-next-line:no-inferrable-types
  mensajeUrl: string = 'https://template-prueba.firebaseio.com/mensajes.json';

  constructor(public http: Http) {
    this.carga_info();
  }

  nuevoMensaje(mensajes: Mensaje) {
    const body = JSON.stringify(mensajes);
    const headers = new Headers({
      'content-type': 'application/json'
    });

    return this.http.post(this.mensajeUrl, body, { headers }).map(res => {
      console.log(res.json());

      return res.json();
    });
  }

  // Informacion de info.pagina.json
  public carga_info() {
    this.http.get('assets/data/info.pagina.json')
        .subscribe(data => {
          this.info = data.json();
    });
  }
}
