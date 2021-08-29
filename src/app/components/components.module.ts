import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncrementoComponent } from './incremento/incremento.component';
import { DonaComponent } from './dona/dona.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    IncrementoComponent,
    DonaComponent
  ],
  exports: [
    IncrementoComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
  ]
})
export class ComponentsModule { }
