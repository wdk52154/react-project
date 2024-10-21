import React, { useState } from 'react';

const Case5: React.FC = () => {
  const [num, setNum] = useState(24);
  console.log(num);
  //函数式更新:根据先前的state更新state
  const handleClick = () => {
    setNum((num) => num + 1);
    setNum((num) => num + 1);
    setNum((num) => num + 1);
  };
  return (
    <>
      <div>{num}</div>
      <button onClick={handleClick}>点击+3</button>
    </>
  );
};

export default Case5;

/*
1 在React18中,我们基于useState创建出来的"修改状态的方法"，他们的执行是异步的。
原理：基于异步操作和更新队列,实现状态的批处理.在任何地方修改状态,都是采用异步编程.
在产生的私有上下文中，代码自上而下执行。
@1 会把所有的setState操作，先加入到更新队列中
@2 当上下文中的代码，都处理完毕后，会让更新队列中的任务，统一更新一次【批处理】


在React16中：
放在合成事件、周期函数中 =》修改状态的方法是异步的
放在其他操作，比如定时器、手动的事件绑定等  =>修改状态的方法是同步的 
*/
