(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.ngLib = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

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
    { type: core.Component, args: [{
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
    'header': [{ type: core.Input },],
    'footer': [{ type: core.Input },],
};
var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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
    { type: core.Component, args: [{
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
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

exports.ProductsModule = ProductsModule;
exports.MutualFundModule = MutualFundModule;
exports.ɵb = MutualFundComponent;
exports.ɵa = ProductsComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngLib.umd.js.map
