import React, { useState, useEffect } from 'react';

//解决方案:函数式更新
const Case2: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      // setCount((count) => count + 1);
      setCount((count) => {
        console.log('count', count);
        return count + 1;
      }); //count引用的都是上一次返回的count+1
    }, 1000);
  }, []);

  //useState每次执行都会创建一个新的setCount函数,setCount回调函数中的count,第一次引用的是通过useState定义的初始值的count.往后都是引用的setCount函数返回的count
  return (
    <>
      <div>{count}</div>
    </>
  );
};
export default Case2;
