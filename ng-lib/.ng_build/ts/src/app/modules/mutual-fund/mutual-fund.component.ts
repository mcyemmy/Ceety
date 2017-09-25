import { Component, OnInit } from '@angular/core';

@Component({
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
})
export class MutualFundComponent implements OnInit {
    header: string;
    footer: string;
    mutualImg: string;

  constructor() {
    this.header = 'Mutual Funds';
    this.footer = 'Mutual fund package';
    this.mutualImg = 'assets/images/mutual-fund-chart.jpg';
  }

  ngOnInit() {
  }

}
