import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Ingredient } from 'src/app/entity/ingredient.class';
import { UNIT_LABEL } from 'src/app/enum/label/unit-label.const';
import { Unit } from 'src/app/enum/unit.enum';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.less'],
})
export class IngredientFormComponent {
  @ViewChild('Ingredientinput') input: ElementRef<HTMLInputElement>;
  public form: FormGroup;
  unitOptions: number[] = Object.values(Unit).filter(
    (x) => typeof x === 'number'
  ) as number[];

  IngredientOption: Ingredient[] = [];
  IngredientfilteredOptions: Ingredient[][] = [];
  public unitsLabel = UNIT_LABEL;
  constructor(
    private readonly fb: FormBuilder,
    private readonly formParent: FormGroupDirective,
    private readonly ingredientService: IngredientService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.ingredientService.Ingredients.subscribe(
      (ingredients: Ingredient[]) => {
        this.IngredientOption = ingredients;
      }
    );
  }

  initForm(): void {
    this.formParent.form.addControl('ingredients', this.fb.array([]));
    this.form = this.formParent.form;
  }

  public displayFn = (value: any): string => {
    return this.IngredientOption.find((_) => _.id === value)?.name ?? '';
  };

  filter(event: any, index: number): void {
    const filterValue = event.target.value.toLowerCase();
    this.IngredientfilteredOptions[index] = this.IngredientOption.filter((o) =>
      o.name.toLowerCase().includes(filterValue)
    );
  }

  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        Ingredient: ['', [Validators.required]],
        Quantity: ['', [Validators.required]],
        Unit: ['', [Validators.required]],
      })
    );
    this.IngredientfilteredOptions.push(this.IngredientOption.slice());
  }

  public getUnitLabel(unit: number) {
    return UNIT_LABEL[unit];
  }
  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
    this.IngredientfilteredOptions.splice(index, 1);
  }
}
