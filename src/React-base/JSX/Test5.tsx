import React from 'react';

//循环
const Test5: React.FC = () => {
  const list = [
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
      name: '王天',
      age: 24,
    },
  ];
  return (
    <>
      {/*  不能用index作为key */}
      <ul>
        {list.map((item) => {
          //结构赋值
          const { id, name, age } = item;
          return (
            <li key={id}>
              {name}---{age}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Test5;
/*
为什么不能用index作为key?
比对的时候，我们必须标记出这一次和上一次同一个DOM元素替换的位置，如果不加key，自动就根据索引来的，根据索引来有一个坏处：当进行数组的添加，删除之后，index就会变。所有的元素都需要重新再计算，
*/
