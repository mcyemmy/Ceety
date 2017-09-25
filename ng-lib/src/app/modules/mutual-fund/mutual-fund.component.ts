import { Component, OnInit } from '@angular/core';

import { ImageUriService } from './image-uri.service';

@Component({
  selector: 'app-mutual-fund',
  templateUrl: './mutual-fund.component.html',
  styleUrls: ['./mutual-fund.component.css']
})
export class MutualFundComponent implements OnInit {
    header: string;
    footer: string;
    mutualImg: string;

  constructor(private img: ImageUriService) {
    this.header = 'Mutual Funds';
    this.footer = 'Mutual fund package';
    this.mutualImg = img.imageFile[0].dataUri;
  }

  ngOnInit() {
  }

}
