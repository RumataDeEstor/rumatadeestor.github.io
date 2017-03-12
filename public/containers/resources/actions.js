import provider from '../../GlobalProvider';

export const CHANGE_FOOD = 'CHANGE_FOOD';

export function changeFood() {
  return {
    type: CHANGE_FOOD,
    food: provider.foodSupply(),
  }
}
