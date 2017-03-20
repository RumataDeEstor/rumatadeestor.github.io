import { listHelper, getId, getRandomInt } from './helpers';
import Hero from './Hero';
import heroes from './heroes.json';

class GlobalProvider {    // must be singleton
  constructor(params) {
    this._foodSupply = 1000;
    this._gold = 2000;
    this.heroes = {
      // all: [],
      // FIXME: think about mechanism of storing all heroes and need of this
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
  }

  foodSupply(dif) {
    if (dif) this._foodSupply += dif;
    // console.info(`%ccurrent foodSupply: ${this._foodSupply}`, 'font-size: 16px; color: blue');
    return this._foodSupply;
  }

  gold(dif) {
    if (dif) this._gold += dif;
    return this._gold;
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
    // this.heroes.all.push(hero);  // getter/setter;  ids
    this.heroes.vacant.push(hero);
  }

  getRandomName() {
    return heroes.names[getRandomInt(0, heroes.names.length - 1)]; // FIXME: can be shortened
  }

  getRandomAvatar() {
    return heroes.avatars[getRandomInt(0, heroes.avatars.length - 1)]; // either
  }

  getRandomHunger() {
    const min = 70;
    const max = 200; // FIXME: these values must be constants
    return getRandomInt(min, max);
  }

  getRandomPayment() {
    const min = 100; // FIXME: these values must be constants
    const max = 300; // Probably will not be random
    return getRandomInt(min, max);
  }

  createPortionOfRandomHeroes(number) {
    const start = 0;
    for (let i=start; i<number; i++) {
      this.createHero({
        name: this.getRandomName(),
        hunger: this.getRandomHunger(),
        avatar: this.getRandomAvatar(),
        payment: this.getRandomPayment(),
      });
    }
  }

  clearVacantHeroes() {
    this.heroes.vacant = [];
  }

  declareEndOfTheDay() {
    const day = GlobalProvider.getDay();
    console.info(`%cDay ${day} is finished.`, 'font-size: 20px; color: red');
  }

  forceDayFinish() {
    this.clearVacantHeroes(); // FIXME: temporary
    const numberOfNewHeroes = 5; // FIXME: must be a constant
    this.declareEndOfTheDay();
    this.createPortionOfRandomHeroes(numberOfNewHeroes);
    this.feedHeroes();
  }

  hireHero(id) {
    const hero = this.findById('heroes:vacant', id);
    if (!hero) return;
    this.heroes.vacant = this.heroes.vacant.filter(hero => hero.id !== id);
    // getter/setter;
    this.heroes.hired = [...this.heroes.hired, hero];
  }

  feedHeroes() {
    this.heroes.hired.forEach(hero => {
      hero.eating() && this.foodSupply(-hero.hunger);
    });
  }
}

GlobalProvider.getInstanceId = getId();
GlobalProvider.getDay = getId(); // FIXME: add startValue == 1

export default new GlobalProvider();
