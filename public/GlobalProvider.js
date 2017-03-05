import { listHelper, getId } from './helpers';
import Hero from './Hero';

class GlobalProvider {    // must be singleton
  constructor(params) {
    this._foodSupply = 1000;
    this.heroes = {
      all: [],
      vacant: [],
      hired: [],
      list: function() {
        return listHelper(this);
      }
    };
    this.collections = {
      heroes: this.heroes,
      list: function() {
        return listHelper(this);
      }
    };
    this.foodSupply();
  }

  foodSupply(dif) {
    if (dif) this._foodSupply += dif;
    console.info(`current foodSupply: ${this._foodSupply}`)
    return this._foodSupply;
  }

  findById(query, id) {
    const [ collection, field ] = query.split(':'); // only for binary query!

      if (!this[collection]) {
        this.collections.list();
        return;
      }

      if (!this[collection][field]) {
        this[collection].list();
        return;
      }

      const result = this[collection][field].find(el => el.id === id);
      if (!result) {
        console.warn(`No instance with id: ${id}`);
      }
      return result;
  }

  createHero(params) {
    const id = GlobalProvider.getInstanceId();
    const hero = new Hero({...params, id});
    this.heroes.all.push(hero);  // getter/setter;  ids
    this.heroes.vacant.push(hero);
  }

  hireHero(id) {
    const hero = this.findById('heroes:vacant', id);
    if (!hero) return;
    this.heroes.vacant = this.heroes.vacant.filter(hero => hero.id !== id);
    // getter/setter;
    this.heroes.hired.push(hero);
  }

  feedHeroes() {
    this.heroes.hired.forEach(hero => {
      hero.eating() && this.foodSupply(-hero.hunger);
    });
  }
}

GlobalProvider.getInstanceId = getId();

export default new GlobalProvider();
