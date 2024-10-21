import React, { useState, useEffect } from 'react';

//闭包陷阱
//场景:在异步回调中获取不到最新的state状态值
const Case1: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
      console.log('count', count);
    }, 1000);
  }, []);
  //useEffect只会在组件挂载成功之后执行一次
  //每次执行定时器的时候,都是在count=0的基础上+1

  return (
    <>
      <div>{count}</div>
    </>
  );
};
export default Case1;
