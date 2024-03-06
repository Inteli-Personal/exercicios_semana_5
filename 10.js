class Employee {
  constructor(name, age, baseSalary) {
    (this.name = name), (this.age = age), (this.baseSalary = baseSalary);
  }
  calculateSalary() {}
}
class Teacher extends Employee {
  constructor(name, age, baseSalary, subject, classesPerWeek) {
    super(name, age, baseSalary),
      (this.subject = subject),
      (this.classesPerWeek = classesPerWeek);
  }
  calculateSalary() {
    console.log(this.baseSalary * this.classesPerWeek);
  }
}
let kizzy = new Teacher("Kizzy", 25, 100, "computer science", 8);
kizzy.calculateSalary();
let godoi = new Teacher("Godói", 30, 100, "IoT", 9);
godoi.calculateSalary();
