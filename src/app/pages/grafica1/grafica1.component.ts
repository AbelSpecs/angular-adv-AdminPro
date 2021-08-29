import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public labels1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public labels2 = ['Ventas', 'Sales', 'Mails'];
  public doughnutChartData = [
    [350, 450, 100],
  ];

  public colors = [{
    backgroundColor: ['red', 'orange', '#F22059']
  }];

}
