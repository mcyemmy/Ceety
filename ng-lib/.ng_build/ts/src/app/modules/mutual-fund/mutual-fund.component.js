import { Component } from '@angular/core';
import { ImageUriService } from './image-uri.service';
export class MutualFundComponent {
    /**
     * @param {?} img
     */
    constructor(img) {
        this.img = img;
        this.header = 'Mutual Funds';
        this.footer = 'Mutual fund package';
        this.mutualImg = img.imageFile[0].dataUri;
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
MutualFundComponent.ctorParameters = () => [
    { type: ImageUriService, },
];
function MutualFundComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MutualFundComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    MutualFundComponent.ctorParameters;
    /** @type {?} */
    MutualFundComponent.prototype.header;
    /** @type {?} */
    MutualFundComponent.prototype.footer;
    /** @type {?} */
    MutualFundComponent.prototype.mutualImg;
    /** @type {?} */
    MutualFundComponent.prototype.img;
}
//# sourceMappingURL=mutual-fund.component.js.map