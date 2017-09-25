import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
        <div class="row promos">
            <div class="col-md-4">
                <app-mutual-fund></app-mutual-fund>
            </div>
            <div class="col-md-4">
                <app-products>
                    <p>
                        Add your content Product content here. Product tag/element can take attributes and values. For example, like header=Annuities and footer=our products
                    </p>
                    <p>
                        For the ng-content tag/element in the library module, you can also use select=[attribute], select=.Classname and select=tagName. Then Add the those corresponding parts to this product element. 
                    </p>
                </app-products>
            </div>
        </div>
    </div>
  `,
  styles: [`
    /* You can add global styles to this file, and also import other style files */
  `]
})
export class AppComponent {
  title = 'app';
}
