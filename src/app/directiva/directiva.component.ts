import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
 listasCurso: string[] =['TypeScrip','JavaScrip','Java EE', 'C#','PHP'];
  constructor() { }
habilitar: boolean= true;
  ngOnInit(): void {
  }

  setHabilitar(): void{
    this.habilitar = (this.habilitar==true)? false:true;
  }



}
