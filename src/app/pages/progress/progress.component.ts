import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso1: number = 50;
  btn: string = 'btn btn-info';
  constructor() { }

  ngOnInit(): void {
  }

  getValor(valor: number) {
    this.progreso1 = valor;
  }

  get getProgreso1() {
    return `${this.progreso1}%`;
  }

}
