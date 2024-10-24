import React from 'react';

//增
const Increase: React.FC = () => {
  /*
  1 push 向数组的末尾添加一个或多个元素,并返回新数组的长度.会修改原数组.
  语法:array.push(item1, item2, ..., itemX) 
   */
  //  const arr = [1, 2, 3, 4];
  //   const newArr1 = arr.push(5);
  //   console.log(newArr1); //5
  //   console.log(arr); //[1, 2, 3, 4, 5]

  /*
  2 unshift 向数组的开头添加一个或多个元素,并返回新数组的长度.会修改原数组
  语法：array.unshift(item1,item2, ..., itemX)
  */
  //   const arr = [1, 2, 3, 4];
  //   const newArr1 = arr.unshift(-1, 0);

  //   console.log(newArr1); //6
  //   console.log(arr); //[-1, 0, 1, 2, 3, 4]

  /*
  3 splice 向数组添加、删除或替换数组中的元素,返回一个新数组.会改变原数组. 
  语法：array.splice(index,howmany,item1,.....,itemX)
  */
  //   const arr = [1, 2, 3, 4, '张三'];
  //   const newArr1 = arr.splice(1, 0, 1, 2, '李四');
  //   console.log(newArr1); //返回一个空数组
  //   console.log(arr); //[1, 1, 2, '李四', 2, 3, 4, '张三']

  /*
  4 concat 用于合并两个或多个数组,并返回一个新数组,不会改变原数
  语法：string.concat(string1, string2, ..., stringX)
  */
  // const arr1 = [1, 2, 3, 4, 'wdk1'];
  // const arr2 = ['wdk2', 5, 6, 7];
  // const newArr = arr1.concat(arr2);
  // console.log(arr1); // [1, 2, 3, 4]
  // console.log(arr2); //['wdk', 5, 6, 7]
  // console.log(newArr); //[1, 2, 3, 4, 'wdk1', 'wdk2', 5, 6, 7]
  return <></>;
};

export default Increase;
