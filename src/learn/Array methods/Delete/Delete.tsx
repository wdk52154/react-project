import React from 'react';

//删
const Delete: React.FC = () => {
  /*
  1 pop 删除数组中的最后一个元素,并返回被删除的元素.会改变原数组
  语法：array.pop()
  */
  // const arr = ['张三', '李四', '王五'];
  // const newarr = arr.pop();
  // console.log(arr); //['张三', '李四']
  // console.log(newarr);//王五

  /*
  2 shift 从数组中删除第一个元素,并返回被删除的元素.会改变原数组
  语法：array.shift()
  */
  // const arr = ['张三', '李四', '王五'];
  // const newarr = arr.shift();
  // console.log(newarr); //张三
  // console.log(arr); //['李四', '王五']

  /*
  3  splice 向数组添加、删除或替换数组中的元素,返回一个新数组,返回被删除的元素.会改变原数组.(包括索引本身)
  语法：array.splice(index,howmany,item1,.....,itemX)
  */
  // const arr = [1, 2, 3, 4];
  // const newarr = arr.splice(1, 2);
  // console.log(newarr); //[2,3]
  // console.log(arr); // [1, 4]

  /*
  4 slice 从数组中提取出指定位置的元素,生成一个新数组,不会改变原数组(不包括索引本身)
  语法:array.slice(start, end)
  */
  const arr = [1, 2, 3, 4];
  const newarr = arr.slice(1, 2);
  console.log(newarr); //[2]
  console.log(arr); // [1, 2, 3, 4]
  return <></>;
};

export default Delete;
