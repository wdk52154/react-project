import React from 'react';

//迭代：用于描述按顺序访问集合中的每个元素的过程
//遍历数组元素的方法
const Iteration: React.FC = () => {
  //数据
  const arr = [
    {
      id: 1,
      name: '张三',
      age: 18,
    },
    {
      id: 2,
      name: '李四',
      age: 20,
    },
    {
      id: 3,
      name: '王六',
      age: 25,
    },
    {
      id: 4,
      name: '刘四',
      age: 25,
    },
  ];

  /**
   * 1 for循环
   */
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(arr[i]);
  // }
  /**
   * 2 map 遍历数组中的元素.返回一个新数组,不会修改原数组.没有return,会返回undefined.(光写return也是返回undefined)
   */
  // const list = arr.map((item, index) => {
  //   // console.log(item); //当前元素
  //   // console.log(index); //索引
  //   return item;
  // });
  // console.log(list);
  /**
   * 3 forEach 遍历数组中的元素.没有返回值,不会修改原数组
   */
  // const list = arr.forEach((item, index) => {
  //   console.log(item); //当前元素
  //   console.log(index); //数组下标又称索引
  // });

  return <></>;
};

export default Iteration;
