import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente} from '../modelos/cliente';
import {ApiClienteService} from '../services/api-cliente.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];

  constructor(private _api: ApiClienteService,

                private router: Router,
                 private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this._api.getClientes().subscribe(
    clientes => this.clientes= clientes
  );
  }

  borrar(cliente:Cliente): void{
    Swal.fire({
      title: 'Esta Seguro',
      text: "No podras revertir esto!",
      icon:'question',
      showCancelButton: true,
      confirmButtonColor:'#d33',
      confirmButtonText: 'Si, Eliminar',
    }).then((result) => {
      if(result.value){
        this._api.Delete(cliente.id).subscribe(response => {
          this.clientes = this.clientes.filter(cli => cli !== cliente)
        });
        Swal.fire(
          'Eliminado',
          'Su archivo ha sido Eliminado',
          'success'
        )
        }else {
          this.router.navigate(['/clientes']);
      }
    })
  }
  onSubmit(){
  
  }

}
