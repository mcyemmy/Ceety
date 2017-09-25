import { Component, Input } from '@angular/core';
export class ProductsComponent {
    constructor() {
        this.header = 'Citi Products';
        this.footer = 'We offer a wide range of Products';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ProductsComponent.decorators = [
    { type: Component, args: [{
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
            },] },
];
/**
 * @nocollapse
 */
ProductsComponent.ctorParameters = () => [];
ProductsComponent.propDecorators = {
    'header': [{ type: Input },],
    'footer': [{ type: Input },],
};
function ProductsComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    ProductsComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ProductsComponent.ctorParameters;
    /** @type {?} */
    ProductsComponent.propDecorators;
    /** @type {?} */
    ProductsComponent.prototype.header;
    /** @type {?} */
    ProductsComponent.prototype.footer;
}
//# sourceMappingURL=products.component.js.map