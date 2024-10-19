import React, { useState, useEffect } from 'react';

const Case1: React.FC = () => {
  const [num, setNum] = useState(0);
  useEffect(() => {
    //获取最新的状态值
    console.log('@1', num);
  });
  useEffect(() => {
    console.log('@2', num);
  }, []);
  useEffect(() => {
    console.log('@3', num);
  }, [num]);
  useEffect(() => {
    return () => {
      //获取的是上一次的状态值
      console.log('@4', num);
    };
  });
  const handle = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div>学习useEffect</div>
      <div>{num}</div>
      <button onClick={handle}>新增</button>
    </>
  );
};

export default Case1;

/*
useEffect：在函数组件中，使用生命周期函数
1 useEffect(callback)：没设置依懒
 + 第一次渲染完毕后，执行callback，等价于componentDidMount
 + 在组件每一次更新完毕后，也会执行callback，等价于componentDidUpdate
2 useEffect(callback,[]): 设置了依懒数组，但是无依懒
 + 只有第一次渲染完毕后，才会执行callback,等价于componentDidMount
3 useEffect(callback,[依懒的状态(多个状态)])
 + 第一次渲染完毕后会执行callback,等价于componentDidMount
 + 当依懒的状态值(或者多个依懒状态中的一个)发生改变，也会触发callback执行,等价于componentDidUpdate
4 useEffect(()=>{
    return ()=>{
       + 组件卸载的时候执行,等价于componentWillUnMount
       + 如果组件更新，会把上一次返回的小函数执行【可以"理解为"上一次渲染的组件释放了】
    }
  })

*/
