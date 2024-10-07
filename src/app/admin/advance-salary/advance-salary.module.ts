import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceSalaryRoutingModule } from './advance-salary-routing.module';
import { ViewComponent } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    AdvanceSalaryRoutingModule,
    SharedModule
  ]
})
export class AdvanceSalaryModule { }
