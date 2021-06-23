import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from '../../modelos/cliente';
import { ApiClienteService } from '../../services/api-cliente.service';
import { _global } from '../../services/_global';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cliente : Cliente = new Cliente();
  public titulo : string = " crear cliente"

  constructor( private _api: ApiClienteService,
                private router: Router,
                 private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargaqrCliente()
  }


cargaqrCliente(): void {
  this.activatedRoute.params.subscribe(params => {
    let id = params['id']
    if(id){
      this._api.GetId(id).subscribe((cliente) => this.cliente = cliente)
    }
  })

}


   create(): void {
  
    this._api.create(this.cliente).subscribe(
      response =>{ this.router.navigate(['/clientes'])
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se Creado Exitosamente',
        text: `Cliente ${this.cliente.nombre} Creado con exito`,
        showConfirmButton: true,
        timer: 3000})
    }) 
  }

  update() :void {
    this._api.update(this.cliente.id, this.cliente).subscribe(cliente =>{
      this.router.navigate(['/clientes'])
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se Actualizo Exitosamente',
        text: `Cliente ${this.cliente.nombre} actualizado con exito`,
        showConfirmButton: true,
        timer: 3000})
    })  }




}
