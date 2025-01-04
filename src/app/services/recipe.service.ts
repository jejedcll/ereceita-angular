import { Injectable } from '@angular/core';
import { Receipe } from '../entity/receipe.class';
@Injectable({
  providedIn: 'root',
})
export class ReceipeService {
  private receipes: Receipe[] = [
    {
      id: 1,
      name: 'poulet au carotte',
      author: 'Jérôme',
      tags: [{ id: 1, name: 'Plat' }],
      ingredients: [
        {
          recipeId: 1,
          ingredientId: 1,
          name: 'carotte',
          quantity: 1,
          caloriesPerGram: 12,
          unit: 'gramm',
        },
        {
          recipeId: 1,
          ingredientId: 2,
          name: 'poulet',
          quantity: 1,
          caloriesPerGram: 15,
          unit: 'gramm',
        },
      ],
      steps: [
        { id: 1, stepNumber: 1, description: 'eplucher les carotte' },
        { id: 2, stepNumber: 2, description: 'Couper le poulet' },
        { id: 3, stepNumber: 3, description: 'Cuire le tout' },
      ],
    },

    {
      id: 2,
      name: 'poulet au carotte',
      author: 'Jérôme',
      tags: [{ id: 1, name: 'Plat' }],
      ingredients: [
        {
          recipeId: 2,
          ingredientId: 1,
          name: 'carotte',
          quantity: 1,
          caloriesPerGram: 12,
          unit: 'gramm',
        },
        {
          recipeId: 2,
          ingredientId: 2,
          name: 'poulet',
          quantity: 1,
          caloriesPerGram: 15,
          unit: 'gramm',
        },
      ],
      steps: [
        { id: 1, stepNumber: 1, description: 'eplucher les carotte' },
        { id: 2, stepNumber: 2, description: 'Couper le poulet' },
        { id: 3, stepNumber: 3, description: 'Cuire le tout' },
      ],
    },

    {
      id: 3,
      name: 'riz au lait',
      author: 'Jérôme',
      tags: [{ id: 3, name: 'dessert' }],
      ingredients: [
        {
          recipeId: 3,
          ingredientId: 3,
          name: 'poulet',
          quantity: 1,
          caloriesPerGram: 15,
          unit: 'gramm',
        },
        {
          recipeId: 3,
          ingredientId: 4,
          name: 'poulet',
          quantity: 1,
          caloriesPerGram: 15,
          unit: 'gramm',
        },
      ],
      steps: [
        { id: 5, stepNumber: 1, description: 'laver le riz' },
        { id: 6, stepNumber: 2, description: 'traire la vache' },
        {
          id: 7,
          stepNumber: 3,
          description: 'claque le prepus contre le lavabo',
        },
        { id: 8, stepNumber: 4, description: 'Cuire le tout' },
      ],
    },
  ];

  constructor() {}

  public getReceipe(id: number): Receipe | undefined {
    return this.receipes.find((receipe) => receipe.id === id);
  }

  public getDailyReceipe(): Receipe[] {
    return this.receipes;
  }

  public addReceipe() {}

  public removeReceipe() {}
}
