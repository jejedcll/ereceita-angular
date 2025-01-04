export class ReceipeStep {
  id: number;
  stepNumber: number;
  description: string;

  constructor(receipeStep: ReceipeStep) {
    this.id = receipeStep.id;
    this.stepNumber = receipeStep.stepNumber;
    this.description = receipeStep.description;
  }
}
