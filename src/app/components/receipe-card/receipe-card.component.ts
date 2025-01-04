import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Receipe } from 'src/app/entity/receipe.class';

@Component({
  selector: 'receipe-card',
  templateUrl: './receipe-card.component.html',
  styleUrls: ['./receipe-card.component.less'],
})
export class ReceipeCardComponent {
  @Input() receipe: Receipe | undefined;

  constructor(private router: Router) {}
  public showReceipe = () => {
    this.router.navigateByUrl(`recette/${this.receipe?.id}`);
  };

  public get getReceipe() {
    return this.receipe;
  }
}
