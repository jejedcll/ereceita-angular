import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Ingredient } from 'src/app/entity/ingredient.class';
import { ReceipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.less'],
})
export class RecipeFormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private readonly receipeService: ReceipeService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
