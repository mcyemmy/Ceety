import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutualFundComponent } from './mutual-fund.component';

import { ImageUriService } from './image-uri.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      MutualFundComponent
  ],
  providers: [
    ImageUriService
  ],
  exports: [
      MutualFundComponent
  ]
})
export class MutualFundModule { }
