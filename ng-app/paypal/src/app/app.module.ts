import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ProductsModule, MutualFundModule } from 'ngLib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      ProductsModule,
      MutualFundModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
