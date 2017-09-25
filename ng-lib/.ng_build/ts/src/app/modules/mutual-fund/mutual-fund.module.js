import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutualFundComponent } from './mutual-fund.component';
import { ImageUriService } from './image-uri.service';
export class MutualFundModule {
}
MutualFundModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
/**
 * @nocollapse
 */
MutualFundModule.ctorParameters = () => [];
function MutualFundModule_tsickle_Closure_declarations() {
    /** @type {?} */
    MutualFundModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    MutualFundModule.ctorParameters;
}
//# sourceMappingURL=mutual-fund.module.js.map