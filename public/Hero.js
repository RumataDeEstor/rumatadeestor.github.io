export default class Hero {
  constructor(params) {
    let { id, name, hunger, avatar, payment } = params;
    this.id = id;
    this.name = name;
    this.hunger = hunger;
    this.avatar = avatar;
    this.payment = payment;
  }

  eating() {
    if (!this.hunger) return;
    console.info(`%c${this.name} ate ${this.hunger} points`, 'font-size: 16px; color: blue');
    return true;
  }
}
