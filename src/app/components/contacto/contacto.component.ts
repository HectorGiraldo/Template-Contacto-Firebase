import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MensajesService } from '../../services/mensajes.service';
import { Mensaje } from '../../interface/mensaje.interface';
import swal from 'sweetalert2';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {

  mensaje: Mensaje = {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
      empresa: ''
  };

  constructor(
    public _ms: MensajesService,
  ) {  }

  enviarMensaje() {

    console.log(this.mensaje);
    this._ms.nuevoMensaje(this.mensaje)
        .subscribe( data => {
         swal('Mensaje enviado!', 'Muchas gracias por contactarnos pronto le atenderemos!', 'success');
         this.mensaje = this.mensaje = {
                            nombre: '',
                            email: '',
                            telefono: '',
                            mensaje: '',
                            empresa: '',
                            };
        });
}




}
