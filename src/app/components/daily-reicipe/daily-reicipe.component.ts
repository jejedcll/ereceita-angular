import { Component, OnInit } from '@angular/core';
import { ReceipeCardComponent } from '../receipe-card/receipe-card.component';
import { ReceipeService } from 'src/app/services/recipe.service';
import { Tag } from 'src/app/entity/Tag.class';
import { Receipe } from 'src/app/entity/receipe.class';
@Component({
  selector: 'daily-reicipe',
  templateUrl: './daily-reicipe.component.html',
  styleUrls: ['./daily-reicipe.component.less'],
})
export class DailyReicipeComponent implements OnInit {
  private dailyReceipe: Receipe[];

  constructor(private readonly receipeService: ReceipeService) {}

  ngOnInit(): void {
    this.dailyReceipe = this.receipeService.getDailyReceipe();
  }

  public get entreeReceipe() {
    return this.dailyReceipe.find((receipe) =>
      receipe.tags.some((tag: Tag) => tag.id == 2)
    );
  }

  public get mainReceipe() {
    return this.dailyReceipe.find((receipe) =>
      receipe.tags.some((tag: Tag) => tag.id == 1)
    );
  }

  public get dessertReceipe() {
    return this.dailyReceipe.find((receipe) =>
      receipe.tags.some((tag: Tag) => tag.id == 3)
    );
  }
}
