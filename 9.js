class ScoreAdder {
  constructor() {
    this.total = 0;
  }
  addScore(score) {
    this.total += score;
  }
  seeTotal() {
    console.log(this.total);
  }
}
let adder = new ScoreAdder();
adder.addScore(4);
adder.addScore(3);
adder.addScore(2);
adder.addScore(9);
adder.seeTotal();
