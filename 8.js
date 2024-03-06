class Animal {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  describe() {
    console.log(`Descrição: ${this.name}, ${this.age}`);
  }
}
class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age), (this.color = color);
  }
  meow() {
    console.log("miau");
  }
}

let dog = new Animal("tutu", 7);
dog.describe();
let cat = new Cat("zuzu", 8, "blue");
cat.describe();
cat.meow();
