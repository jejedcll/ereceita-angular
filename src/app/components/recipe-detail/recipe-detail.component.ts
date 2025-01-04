import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Receipe } from 'src/app/entity/receipe.class';
import { ReceipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less'],
})
export class RecipeDetailComponent implements OnInit {
  public receipe: Receipe | undefined;

  constructor(
    private route: ActivatedRoute,
    private readonly receipeService: ReceipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.receipe = this.receipeService.getReceipe(Number(params['id']));
    });
  }

  public get getReceipe(): Receipe | undefined {
    return this.receipe;
  }
}
