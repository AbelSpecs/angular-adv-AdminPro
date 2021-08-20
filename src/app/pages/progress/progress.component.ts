import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso: number = 50;
  constructor() { }

  ngOnInit(): void {
  }

  cambioPorcentaje(valor: number) {
    if( this.progreso >= 95 && valor >= 0){
      this.progreso = 100;
    }
    if( this.progreso <= 0 && valor < 0){
      this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
  }

  get getProgreso() { return `${this.progreso}%`; }

}
