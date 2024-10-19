import React, { useCallback, useState } from 'react';

let prev: any;
const CallbackCase1: React.FC = () => {
  const [x, setX] = useState(0);

  const handle = useCallback(() => {}, []);
  // const handle = () => {};
  if (!prev) {
    prev = handle;
  } else {
    console.log(handle === prev); //true
  }
  return (
    <>
      <div className="box">
        <div className="main">
          <p>{x}</p>
        </div>
        <div className="footer">
          <button onClick={() => setX(x + 1)}>累加</button>
        </div>
      </div>
    </>
  );
};
export default CallbackCase1;
/* 
  函数组件的每一次更新,都是把函数重新执行
    + 产生一个新的闭包
    + 在闭包中所有创建函数的操作,都会：重新创建新的堆内存【也就是函数都会重新创建】
    const handle = () => {};//第一次：0x001 第二次:0x002
    if (!prev) {
      prev = handle;
    } else {
      console.log(handle === prev); //false
    }
 */
/*
 const xxx =useCallback( callback , [dependencies])
 + 组件第一次渲染，useCallback执行，创建一个函数'callback'，赋值给xxx
 + 组件后续每一次更新，判断依赖的状态值是否改变，如果改变，则会重新创建新的函数堆，赋值给xxx；但是如果。依懒的状态没有更新【或者没有设置依懒“[ ]”】则xxx获取的一直是第一次创建的函数堆，不会创建新的函数出来！！
 + 或者说，基于useCallback，可以始终获取第一次创建函数的堆内存地址（或者说函数引用）
  */
