import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class JobsRequestModule { }
