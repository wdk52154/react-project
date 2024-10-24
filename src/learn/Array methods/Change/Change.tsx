import React from 'react';

//改
const Change: React.FC = () => {
  /*
    1 reverse 翻转数组元素,会修改原数组,不会生成新数组
  */
  //   const arr1 = [1, 2, 3, 4];
  //   arr1.reverse();
  //   console.log(arr1); //[4, 3, 2, 1]

  /**
   * 2 sort 排序,将数组元素视为字符串并按照Unicode编码顺序进行排序.不会生成新数组
   */

  const num = [2, 3, 1, 5, 4];
  //传入一个比较函数
  num.sort(function (a, b) {
    return a - b; //升序排序
  });

  console.log(num); // [1, 2, 3, 4, 5]
  return <></>;
};

export default Change;
