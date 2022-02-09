// class declaration
class Rectange {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// class expression with unnamed
let square = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// class expression with 
let triangle = class someTriange {
  constructor(base, height) {
    this.height = height;
    this.base = base;
  }
};
