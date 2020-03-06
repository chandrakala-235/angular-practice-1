import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertBtnComponent} from './alert-btn.component';



@NgModule({
  declarations: [AlertBtnComponent],
  imports: [
    CommonModule
  ],
  exports:[AlertBtnComponent]
})
export class AlertBtnModule { }
