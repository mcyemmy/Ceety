import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4> {{ header }} </h4>
        </div>
       
        <ng-content></ng-content>
        
        <div class="panel-footer">
            <p>
                <strong>  {{ footer }} </strong>
            </p>
        </div>
    </div>
  `,
  styles: [`
    .promos > .col-md-4:first-child {
        margin-right: 20px;
    }
  `]
})
export class ProductsComponent implements OnInit {
    @Input() header = 'Citi Products';
    @Input() footer = 'We offer a wide range of Products';

  constructor() {
  }

  ngOnInit() {
  }

}
