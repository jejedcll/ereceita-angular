export class ReceipeIngredient {
  recipeId: number;
  ingredientId: number;
  name: string;
  quantity: Number;
  caloriesPerGram: Number;
  unit: string;

  constructor(receipeIngredient: ReceipeIngredient) {
    this.recipeId = receipeIngredient.recipeId;
    this.ingredientId = receipeIngredient.ingredientId;
    this.name = receipeIngredient.name;
    this.quantity = receipeIngredient.quantity;
    this.caloriesPerGram = receipeIngredient.caloriesPerGram;
    this.unit = receipeIngredient.unit;
  }
}
