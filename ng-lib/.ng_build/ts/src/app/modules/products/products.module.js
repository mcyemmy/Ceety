import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
export class ProductsModule {
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
function ProductsModule_tsickle_Closure_declarations() {
    /** @type {?} */
    ProductsModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    ProductsModule.ctorParameters;
}
//# sourceMappingURL=products.module.js.map