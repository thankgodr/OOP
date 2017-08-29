'use strict';

class Shape { 
  constructor(name) {
    this.name = name;
    this.size = 0;
  }

  // Simple class instance methods using short-hand method
  // declaration
  getName() {
    return this.name;
  }

  setAngle(size){
    this.size = size;
  }

  getAngle(){
    return this.size;
  }  
}

class Square extends Shape {
  constructor(length) {
    super("Square");
    this.setAngle(length)
  }
  
  getAttrib(){
    return "Square has for equal part";
  }
  
}

class Circle extends Shape{
  constructor(){
    super("Circle");
  }

  changeName(name){
    this.name = name;
  }
}





