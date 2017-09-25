import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
var ProductsComponent = (function () {
    function ProductsComponent() {
        this.header = 'Citi Products';
        this.footer = 'We offer a wide range of Products';
    }
    /**
     * @return {?}
     */
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-products',
                template: "\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4> {{ header }} </h4>\n        </div>\n       \n        <ng-content></ng-content>\n        \n        <div class=\"panel-footer\">\n            <p>\n                <strong>  {{ footer }} </strong>\n            </p>\n        </div>\n    </div>\n  ",
                styles: ["\n    .promos > .col-md-4:first-child {\n        margin-right: 20px;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
ProductsComponent.ctorParameters = function () { return []; };
ProductsComponent.propDecorators = {
    'header': [{ type: Input },],
    'footer': [{ type: Input },],
};
var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
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
ProductsModule.ctorParameters = function () { return []; };
var MutualFundComponent = (function () {
    function MutualFundComponent() {
        this.header = 'Mutual Funds';
        this.footer = 'Mutual fund package';
        this.mutualImg = 'assets/images/mutual-fund-chart.jpg';
    }
    /**
     * @return {?}
     */
    MutualFundComponent.prototype.ngOnInit = function () {
    };
    return MutualFundComponent;
}());
MutualFundComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-mutual-fund',
                template: "\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4> {{ header }} </h4>\n        </div>\n       \n    <!--        <ng-content></ng-content> -->\n        <div class=\"panel-body\">\n            <img class=\"img-responsive\" style=\"height:220px\" [src]=\"mutualImg\" alt=\"mutual fund\">\n            <p>Do you want a diversified portfolio?</p>\n            <p>Are you willing to pay an annual expense for professional management?</p> \n        </div>\n        \n        <div class=\"panel-footer\">\n            <p>\n                <strong> {{ footer }} </strong>\n            </p>\n        </div>\n    </div>\n        \n    \n  ",
                styles: ["\n    .promos > .col-md-4:first-child {\n        margin-right: 20px;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
MutualFundComponent.ctorParameters = function () { return []; };
var MutualFundModule = (function () {
    function MutualFundModule() {
    }
    return MutualFundModule;
}());
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
MutualFundModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { ProductsModule, MutualFundModule, MutualFundComponent as ɵb, ProductsComponent as ɵa };
//# sourceMappingURL=ngLib.es5.js.map
