import React from 'react';

//面向对象
const MxdxOne: React.FC = () => {
  //1 类&封装
  class Animal {
    name;
    constructor(name: string) {
      this.name = name;
    }
    eat(food: string) {
      console.log(`${this.name}吃${food}`);
    }
  }

  //2 继承
  //狗
  class Dog extends Animal {
    constructor() {
      super('狗');
    }
    speak() {
      console.log('汪汪汪');
    }
  }
  //猫
  class Cat extends Animal {
    constructor() {
      super('猫');
    }
    speak() {
      console.log('喵喵喵');
    }
  }
  let dog = new Dog();
  dog.eat('肉');
  dog.speak();
  let cat = new Cat();
  cat.eat('鱼');
  cat.speak();
  return <></>;
};
export default MxdxOne;
