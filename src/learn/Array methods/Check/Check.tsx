import React from 'react';
//查
const Check: React.FC = () => {
  /*
    1 indexOf(item,[,start]) 查找目标元素是否存在于数组中,存在返回下标,不存在返回-1.(找到就不往下找了)
  */
  //   const arr = ['a', 'b', 'c', 'd', 'e', 'c'];
  //   const res1 = arr.indexOf('c');
  //   const res2 = arr.indexOf('1');
  //   console.log(res1); //2
  //   console.log(res2); //-1

  /*
   2 lastIndexOf() 返回元素最后一次出现的位置,找不到返回-1
   */
  //   const arr = [11, 22, 33, 44, 55, 66, 11];
  //   const res1 = arr.lastIndexOf(11);
  //   const res2 = arr.lastIndexOf(222);
  //   console.log(res1); //6
  //   console.log(res2); //-1

  /*
  3  find 返回符合条件的元素(断言函数,找到目标则停止循环)
  */
  //   const ages = [3, 15, 20, 30];
  //   const arr = ages.find(function (v, k) {
  //     return v >= 10;
  //   });
  //   console.log(arr); //15

  /*
  4 findIndex  返回符合条件元素的下标(断言函数,找到目标则停止循环)
  */
  //   const ages = [3, 15, 20, 30];
  //   const arr = ages.findIndex(function (v, k) {
  //     return v >= 10;
  //   });
  //   console.log(arr); //1

  /*
  5 includes  是否包含某个元素,是返回true,不是返回flase.
  */
  //   const arr = [11, 22, 33, 44];
  //   const newarr1 = arr.includes(22);
  //   const newarr2 = arr.includes(111);
  //   console.log(newarr1); //true
  //   console.log(newarr2); //false

  /*
  6 filter 过滤,当return后面bool值为true的时候,会生成一个新数组，返回当前元素.没有返回条件的,会返回空数组.
  */
  //   const arr = [4, 5, 6, 7, 8];
  //   const res = arr.filter(function (v, k) {
  //     return v > 7;
  //   });
  //   console.log(res); //[8]
  //   console.log(arr); //[4, 5, 6, 7, 8]
  return <></>;
};
