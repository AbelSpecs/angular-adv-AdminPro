import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-incremento',
  templateUrl: './incremento.component.html',
  styleUrls: ['./incremento.component.css']
})
export class IncrementoComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input() btnStyle: string = '';
  @Output() valor: EventEmitter<number> = new EventEmitter<number>();
  btn: string = 'btn btn-primary'
  constructor() { }

  ngOnInit(): void {
    (this.btnStyle) === '' ? this.btnStyle = this.btn : this.btnStyle;
  }

  cambioPorcentaje(valor: number) {

    if( this.progreso >= 100 && valor >= 0){
      this.valor.emit(100);
      this.progreso = 100;
      return
    }
    if( this.progreso <= 0 && valor < 0){
      this.valor.emit(0);
      this.progreso = 0;
      return
    }

    this.progreso = this.progreso + valor;
    this.valor.emit(this.progreso);

  }
}
