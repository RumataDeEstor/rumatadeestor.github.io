import provider from '../../GlobalProvider';

export const HIRE_HERO = 'HIRE_HERO';

export function hireHero(id) {
  return {
    type: HIRE_HERO,
    hero: provider.findById('heroes:hired', id),
    vacant: provider.heroes.vacant,
  }
}
