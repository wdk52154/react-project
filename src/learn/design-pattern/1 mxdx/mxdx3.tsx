import React from 'react';

const MxdxThree: React.FC = () => {
  //多态：多种形态

  //动物的类
  class Animal {
    name: string;
    constructor(name: any) {
      this.name = name;
    }
    eat(food: any) {}
  }
  class Dog extends Animal {
    eat(food: any) {
      console.log(`${this.name}吃${food}`);
    }
  }
  class Person extends Animal {
    eat(food: any) {
      console.log(`${this.name}吃${food}`);
    }
  }
  let d = new Dog('狗');
  d.eat('肉');
  let p = new Person('人');
  p.eat('烧饼');

  return <></>;
};
export default MxdxThree;
