export function listHelper(obj) {
  const list = Object.keys(obj).filter(key => key != 'list');
  console.info(`This collection has fields: ${list}`);
  return list;
}

export function getId() {
  let id;
  return function () {
    if (id === undefined) {
      id = 0;
    }
    return id++;
  }
};

export function getRandomInt(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
