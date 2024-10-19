import React from 'react';

//组件通信--子传父: callback,将回调函数作为属性传给子组件,子组件通过props接收,在子组件需要时调用这些函数

//子组件
const Son = (props: any) => {
  const { test } = props;
  return (
    <>
      <button onClick={test}>子组件的按钮</button>
    </>
  );
};

//父组件
const Test2: React.FC = () => {
  //测试函数
  const test = () => {
    console.log('我是父组件传过来的方法');
  };
  return (
    <>
      <Son test={test} />
    </>
  );
};

export default Test2;
