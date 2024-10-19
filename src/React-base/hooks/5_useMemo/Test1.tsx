import React, { useState, useMemo } from 'react';

const Test1: React.FC = () => {
  const [supNum, setSupNum] = useState(10);
  const [oppNum, setOppNum] = useState(5);
  const [x, setX] = useState(0);
  //   const ratio: any = () => {
  //     let total = supNum + oppNum,
  //       ratio = '--';
  //     if (total > 0) ratio = ((supNum / total) * 100).toFixed(2) + '%';
  //     return ratio;
  //   };

  const ratio = useMemo(() => {
    let total = supNum + oppNum,
      ratio = '--';
    if (total > 0) ratio = ((supNum / total) * 100).toFixed(2) + '%';
    return ratio;
  }, [supNum, oppNum]);
  return (
    <>
      <div className="vote-box">
        <div className="main">
          <p>支持人数:{supNum}</p>
          <p>反对人数:{oppNum}</p>
          <p>支持比率:{ratio}</p>
          <p>x:{x}</p>
        </div>
        <div className="footer">
          <button onClick={() => setSupNum(supNum + 1)}>支持</button>
          <button onClick={() => setOppNum(oppNum + 1)}>反对</button>
          <button onClick={() => setX(x + 1)}>干点别的事</button>
        </div>
      </div>
    </>
  );
};

export default Test1;

/*
useMemo：优化的hook函数
 + 如果函数组件中，有消耗性能/时间的计算操作，则尽可能用useMemo缓存起来，设置对应的依懒。
 + 这样可以保证，当非依懒的状态发生改变，不会去处理一些没必要的操作，提高组件更新的速度！！
用法:
const xxx =useMemo(callback,[dependencies])
 + 第一次渲染组件的时候,callback会执行
 + 后期只有依赖的状态值发生改变,callback才会再执行
 + 每一次会把callback执行的返回结果赋值给xxx
 + useMemo具备'计算缓存'.在依赖的状态值没有发生改变,callback没有触发执行的时候,xxx获取的是上一次计算出来的结果和Vue中的计算熟悉非常的类似!
*/
