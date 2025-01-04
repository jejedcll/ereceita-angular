import { Unit } from '../unit.enum';

export const UNIT_LABEL = {
  [Unit.Gramm.valueOf()]: 'g',
  [Unit.Kilogramm.valueOf()]: 'kg',
  [Unit.Teaspoon.valueOf()]: 'tsp',
  [Unit.Tablespoon.valueOf()]: 'tbsp',
  [Unit.Cup.valueOf()]: 'cup',
  [Unit.Liter.valueOf()]: 'l',
  [Unit.milliliter.valueOf()]: 'ml',
} as const;
