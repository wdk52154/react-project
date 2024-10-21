import React from 'react';

const Usage: React.FC = () => {
  return <></>;
};
export default Usage;

/*
const [state, setState] = useState(initialValue);
1 基础用法
  执行useState,传递的initialValue是初始的状态值
  执行useState这个方法,返回结果是一个数组:[状态值,修改状态的方法]
     + state:获取的状态值
     + setState:修改状态的方法
   执行setState(value)
     + 修改状态值为value
     + 通知视图更新

2 useState的处理机制
   + 执行useState,只有第一次.设置的初始值会生效.其余以后在执行获取的都是最新的状态值
   + 返回修改状态的方法，每一次都是返回一个新的
   
  */
