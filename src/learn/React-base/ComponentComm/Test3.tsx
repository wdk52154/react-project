import React, { useContext } from 'react';

//1 创建context上下文
const Context: any = React.createContext(0);
//组件通信--非相关组件之间：使用context上下文

//子组件1
const Son1 = () => {
  //2 使用useContext接受context的数据
  const data: any = useContext(Context);
  console.log(data);
  return (
    <>
      <h1>子组件1</h1>
      <div>{data.title}</div>
      <div>{data.name}</div>
      <div>{data.age}</div>
    </>
  );
};
const Son2 = () => {
  const data: any = useContext(Context);
  console.log(data);
  return (
    <>
      <h1>子组件2</h1>
      <div>{data.title}</div>
      <div>{data.name}</div>
      <div>{data.age}</div>
    </>
  );
};
//父组件
const Test3: React.FC = () => {
  const name = '张三';
  const age = 18;
  return (
    <Context.Provider value={{ title: '这是一个全局的数据', name, age }}>
      <Son1 />
      <Son2 />
    </Context.Provider>
  );
};

export default Test3;
