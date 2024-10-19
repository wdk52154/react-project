import React from 'react';

//条件渲染

const Test4: React.FC = () => {
  const flag = true;
  const Hello = () => {
    if (flag) return <p>我是自定义组件为true</p>;
    return <p>我是自定义组件为false</p>;
  };
  return (
    <>
      <h1>条件渲染</h1>
      {/* 1 && 逻辑与运算符 */}
      <div>{flag && <p>hello world</p>}</div>
      {/* 2 三元表达式 */}
      <div>{flag ? <p>三元表达式</p> : null}</div>
      {/* 3 自定义组件 */}
      <Hello />
    </>
  );
};
export default Test4;
/*
1 使用&&  逻辑与运算符
2 使用三元表达式
3 使用函数（自定义组件）
 */
