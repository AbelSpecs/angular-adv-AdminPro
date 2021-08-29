import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

  @Input() labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() colores: Object[] = [{
    backgroundColor: ['#6857E6', '#009FEE', '#F02059']
  }];
  constructor() { }

  ngOnInit(): void {
  }
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
}
