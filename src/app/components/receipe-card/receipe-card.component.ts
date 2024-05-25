import { Component } from '@angular/core';

@Component({
  selector: 'receipe-card',
  templateUrl: './receipe-card.component.html',
  styleUrls: ['./receipe-card.component.less'],
})
export class ReceipeCardComponent {
  public showReceipe = () => {
    console.log('click card');
  };
}
