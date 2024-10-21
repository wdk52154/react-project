import React, { useState } from 'react';

//倒计时效果,从10开始到0停止,并显示活动开始
const Case2: React.FC = () => {
  const [state, setState] = useState(10);
  const startHandle = () => {
    const timer = setInterval(() => {
      //函数式更新
      setState((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
  };
  return (
    <div className="djs">
      <h1>{state > 0 ? `还剩${state}秒` : '活动开始'}</h1>
      <button onClick={startHandle}>开始计时</button>
    </div>
  );
};

export default Case2;
