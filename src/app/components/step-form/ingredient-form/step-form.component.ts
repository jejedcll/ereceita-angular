import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'step-form',
  templateUrl: './step-form.component.html',
  styleUrls: ['./step-form.component.less'],
})
export class StepFormComponent implements OnInit, OnDestroy {
  public form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly formParent: FormGroupDirective
  ) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formParent.form.addControl('steps', this.fb.array([]));
    this.form = this.formParent.form;
  }

  get steps(): FormArray {
    return this.form.get('steps') as FormArray;
  }

  addStep() {
    this.steps.push(
      this.fb.group({
        stepNumber: this.steps.length + 1,
        description: ['', [Validators.required]],
      })
    );
  }

  removeStep(index: number) {
    this.steps.removeAt(index);
  }
}
