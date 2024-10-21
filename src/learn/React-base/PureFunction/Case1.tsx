import React from 'react';

//PureFunction(纯函数)：1 相同的输入始终获得相同的输出 2 不会修改程序的状态或引起副作用
const Case1: React.FC = () => {
  //纯函数
  function calc(x: any) {
    return x + 1;
  }
  //不是纯函数
  function calc2(x: number) {
    return x + 1 + Math.random();
  }

  return <></>;
};

export default Case1;
