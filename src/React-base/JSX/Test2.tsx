import React from 'react';

//JSX语法-属性
const Test2: React.FC = () => {
  return (
    <>
      <div style={{ width: '250px', height: '250px', background: 'red' }}></div>
    </>
  );
};
export default Test2;
/*
1 class要改为className
2 style要使用JS对象(不能是string)而且key用驼峰写法
 <div style={{  background: 'red' }}>1</div>
黄色括号里面是JS对象，backgroundColor是key
 */
