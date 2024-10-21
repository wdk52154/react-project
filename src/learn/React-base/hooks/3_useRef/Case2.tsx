import React, { useEffect, useReducer, useRef } from 'react';

// 2 获取DOM元素

//点击按钮聚焦文字输入框
const Case2: React.FC = () => {
  const inputRef: any = useRef(null);
  const buttonRef: any = useRef(null);
  const handleClick = () => {
    inputRef.current.focus();
  };
  useEffect(() => {
    //获取输入框的DOM元素
    console.log(inputRef.current);
    //获取按钮的DOM元素
    console.log(buttonRef.current);
  }, []);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick} ref={buttonRef}>
        聚焦输入框
      </button>
    </>
  );
};

export default Case2;
