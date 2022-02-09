class rectange {
  lenght;
  breath;

  constructor(lenght, breath) {
    this.lenght = lenght;
    this.breath = breath;
  }
  #cal() {
    return this.lenght * this.breath;
  }
  get Area() {
    return this.#cal;
  }

  print() {
    console.log("hello rec");
  }
}

class cuboid extends rectange {
  height;

  constructor(length, breath, height) {
    super(length, breath);
    this.height = height;
  }

  volume() {
    return this.Area() * this.height;
  }

  hello() {
    this.print();
  }
}

let a = new rectange(8, 6);
let c = new cuboid(8, 9, 10);

console.log("area : ", a.Area());
console.log("volume : ", c.volume());
console.log("hello : ", c.hello());
