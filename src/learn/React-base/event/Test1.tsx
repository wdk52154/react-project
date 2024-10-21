import React from 'react';

//React基础-事件
const Test3: React.FC = () => {
  const onClick = (event: any) => {
    console.log('event', event);
  };
  return (
    <>
      <button onClick={onClick}>点击按钮</button>
    </>
  );
};

export default Test3;
/*
1 使用onXxx的形式
2 必须传入一个函数(是fn 而非fn())
*/
