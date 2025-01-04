import { Tag } from './Tag.class';
import { Ingredient } from './ingredient.class';
import { ReceipeIngredient } from './receipeIngredient.class';
import { ReceipeStep } from './receipeStep';

export class Receipe {
  id: number;
  name: string;
  author: string;
  tags: Tag[];
  ingredients: ReceipeIngredient[];
  steps: ReceipeStep[];

  constructor(receipe: Receipe) {
    this.id = receipe.id;
    this.name = receipe.name;
    this.author = receipe.author;
    this.tags = receipe.tags;
    this.ingredients = receipe.ingredients;
    this.steps = receipe.steps;
  }
}
