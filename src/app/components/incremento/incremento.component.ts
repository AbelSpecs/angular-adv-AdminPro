import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incremento',
  templateUrl: './incremento.component.html',
  styleUrls: ['./incremento.component.css']
})
export class IncrementoComponent implements OnInit {

  progreso: number = 50;
  constructor() { }

  ngOnInit(): void {
  }

  cambioPorcentaje(valor: number) {

    this.progreso = this.progreso + valor;

    if( this.progreso >= 100 && valor >= 0){
      this.progreso = 100;
    }
    if( this.progreso <= 0 && valor < 0){
      this.progreso = 0;
    }

  }

  get getProgreso() { return `${this.progreso}%`; }

}
