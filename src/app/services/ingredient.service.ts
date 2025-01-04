import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from '../entity/ingredient.class';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  constructor() {}

  private mockIngredient: Ingredient[] = [
    { id: 1, name: 'carotte', caloriePerGram: 12 } as Ingredient,
    { id: 2, name: 'Poulet', caloriePerGram: 12 } as Ingredient,
  ];
  public get Ingredients(): Observable<Ingredient[]> {
    return of(this.mockIngredient);
  }
}
