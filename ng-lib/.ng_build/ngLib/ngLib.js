import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ProductsComponent {
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

class ProductsModule {
}
ProductsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    ProductsComponent
                ],
                exports: [
                    ProductsComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
ProductsModule.ctorParameters = () => [];

class MutualFundComponent {
    constructor() {
        this.header = 'Mutual Funds';
        this.footer = 'Mutual fund package';
        this.mutualImg = 'assets/images/mutual-fund-chart.jpg';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MutualFundComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-mutual-fund',
                template: `
    <div class="panel panel-default">
        <div class="panel-heading">
            <h4> {{ header }} </h4>
        </div>
       
    <!--        <ng-content></ng-content> -->
        <div class="panel-body">
            <img class="img-responsive" style="height:220px" [src]="mutualImg" alt="mutual fund">
            <p>Do you want a diversified portfolio?</p>
            <p>Are you willing to pay an annual expense for professional management?</p> 
        </div>
        
        <div class="panel-footer">
            <p>
                <strong> {{ footer }} </strong>
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
MutualFundComponent.ctorParameters = () => [];

class MutualFundModule {
}
MutualFundModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    MutualFundComponent
                ],
                exports: [
                    MutualFundComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
MutualFundModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { ProductsModule, MutualFundModule, MutualFundComponent as ɵb, ProductsComponent as ɵa };
//# sourceMappingURL=ngLib.js.map
