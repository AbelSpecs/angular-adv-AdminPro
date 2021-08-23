import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncrementoComponent } from './incremento/incremento.component';



@NgModule({
  declarations: [
    IncrementoComponent
  ],
  exports: [
    IncrementoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
