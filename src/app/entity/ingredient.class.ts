export class Ingredient {
  id: number;
  name: string;
  caloriePerGram: number;

  constructor(ingredient: Ingredient) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.caloriePerGram = ingredient.caloriePerGram;
  }
}
