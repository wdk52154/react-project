import React from 'react';

//JSX语法-插入JS变量
const Test3: React.FC = () => {
  //变量
  const a = 1;
  //函数
  const onClick = () => {
    console.log('点击事件');
  };
  const flag = true;
  //表达式
  const bds = flag && <p>hello world</p>;
  return (
    <>
      <p>{a}</p>
      <button onClick={onClick}>点击</button>
      <div>{bds}</div>
    </>
  );
};
export default Test3;
/*
1 使用{xxx} 可以插入JS变量、函数、表达式。
2 可插入普通文本、属性
*/
