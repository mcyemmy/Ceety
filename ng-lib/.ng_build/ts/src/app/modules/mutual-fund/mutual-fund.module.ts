import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutualFundComponent } from './mutual-fund.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      MutualFundComponent
  ],
  exports: [
      MutualFundComponent
  ]
})
export class MutualFundModule { }
