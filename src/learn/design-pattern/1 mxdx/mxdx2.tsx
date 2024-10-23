import React from 'react';

const MxdxTwo: React.FC = () => {
  //封装

  //父类
  class Person {
    public name: string; //公有属性，自己,自己的子类和其他类都可以访问
    protected age: number; //受保护的属性，自己，自己的子类能访问，其他类不能访问
    private money: number; //私有属性，自己能访问，自己的子类和其他类都不能访问
    constructor(name: string, age: number, money: number) {
      this.name = name;
      this.age = age;
      this.money = money;
    }
  }
  //子类
  class Student extends Person {
    public studentId: number; //学号
    constructor(name: string, age: number, money: number, studentId: number) {
      super(name, age, money);
      this.studentId = studentId;
    }
    getName() {
      //在子类中可以访问父类的公有属性
      console.log(`我的名字叫${this.name}`);
    }
    getAge() {
      //在子类中可以访问父类的受保护的属性,父类也可以访问
      console.log(`${this.age}了`);
    }
    getMoney() {
      //子类不能访问私有属性,父类可以访问
      // console.log(`我的私房钱是${this.money}`)
    }
  }
  let s1 = new Student('zhangsan', 18, 100, 1);
  //在其他类中可以访问父类的公有属性
  console.log(s1.name);
  //在其他类中不可以访问公类的受保护的属性
  //   console.log(s1.age);

  //在其他类中不可以访问公类的私有属性
  //   console.log(s1.money);
  return <></>;
};
export default MxdxTwo;
