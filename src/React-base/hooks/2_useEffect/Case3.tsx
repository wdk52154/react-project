import React, { useEffect, useState } from 'react';

//在Effect中根据先前的state更新state
const Case3: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      //传递一个state更新器
      setCount((count) => {
        console.log(count);
        return count + 1;
      });
      return () => clearInterval(intervalId);
    }, 1000);
  }, []); //现在count不是一个依懒项
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default Case3;
