export default class Hero {
  constructor(params) {
    let { id, name, hunger, avatar } = params;
    this.id = id;
    this.name = name;
    this.hunger = hunger;
    this.avatar = avatar;
  }
  
  eating() {
    if (!this.hunger) return;
    console.info(`${this.name} ate ${this.hunger} points`);
    return true;
  }
}