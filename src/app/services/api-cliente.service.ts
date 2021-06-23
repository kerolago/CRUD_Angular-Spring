import { Injectable } from '@angular/core';
import { CLIENTES} from '../clientes/clientes.json';
import { Cliente} from '../modelos/cliente';
import { Observable, throwError} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs'
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { _global } from './_global';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ApiClienteService {
  url: string;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { 
    this.url =_global.url;
  }
  private extractData( res: Response){
    let body = res ;
    return body || {};
  }
  private errorr( res: Response){
    catchError(e => {
      this.router.navigate(['/clientes'])
      console.log(e.error.mensaje);
      Swal.fire('Error al editar', e.error.mensjae, 'error');

      return throwError(e);
    })
  }



  getClientes(): Observable<any> {
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(this.url + 'clientes', httpOptions).pipe(map(this.extractData));
  }

 

 
  create(modelo):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>(this.url + 'clientes',JSON.stringify(modelo), httpOptions).pipe(
      catchError(e => {
       
        console.log(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
  
        return throwError(e);
      })
    );
  }
  
  GetId(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })
    };
    return this.http.get(this.url + 'clientes/' + id, httpOptions).pipe(map(this.extractData)  , catchError(e => {
      this.router.navigate(['/clientes'])
      console.log(e.error.mensaje);
      Swal.fire('Error en al editar', e.error.mensaje, 'error');

      return throwError(e);
    }));
  }

  update(id, modelo): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })
    };
    return this.http.put(this.url + 'clientes/' + id, JSON.stringify(modelo), httpOptions).pipe(  catchError(e => {
       
      console.log(e.error.mensaje);
      Swal.fire(e.error.mensaje, e.error.error, 'error');

      return throwError(e);
    })
    );
  }

  Delete(id): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.delete(this.url + 'clientes/' + id, httpOptions).pipe(
      catchError(e => {
       
        console.log(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
  
        return throwError(e);
      })
    );
  }

  


}
