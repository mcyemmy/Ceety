import { OnInit } from '@angular/core';
import { ImageUriService } from './image-uri.service';
export declare class MutualFundComponent implements OnInit {
    private img;
    header: string;
    footer: string;
    mutualImg: string;
    constructor(img: ImageUriService);
    ngOnInit(): void;
}
