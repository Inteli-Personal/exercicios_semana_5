class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  describe() {
    console.log(`Descrição: ${this.name}, ${this.age}`);
  }
}
let dog = new Animal("tutu", 7);
dog.describe();
let cat = new Animal("zuzu", 8);
cat.describe();