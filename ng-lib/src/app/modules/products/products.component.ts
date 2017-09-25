import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    @Input() header = 'Citi Products';
    @Input() footer = 'We offer a wide range of Products';

  constructor() {
  }

  ngOnInit() {
  }

}
