import React, { useRef } from 'react';
//useRef:1 缓存一个值,改变之后不会触发渲染 2 获取DOM元素

//使用ref记录按钮被点击的次数
//1 缓存一个值,改变之后不会触发渲染
const Case1: React.FC = () => {
  const ref = useRef(0);
  const handleClick = () => {
    ref.current = ref.current + 1;
    console.log(`You clicked ${ref.current} times!`);
  };
  return (
    <>
      {ref.current}
      <button onClick={handleClick}>点击!</button>
    </>
  );
};

export default Case1;
