import React from 'react';

//组件通信--父传子: props,父组件把传递的属性,写到子组件标签上,子组件用props接收,直接用就行

//定义props的类型
interface SonProps {
  name?: string;
  age?: number;
}

const Son = (props: SonProps) => {
  return (
    <div style={{ background: '#ff5' }}>
      <h1>子组件</h1>
      <div>
        {props.name}---{props.age}
      </div>
    </div>
  );
};
//父组件
const Test1: React.FC = () => {
  const name = '张三';
  const age = 18;
  return (
    <div style={{ background: 'pink' }}>
      <h1>组件通信--父传子</h1>
      <div>父组件的内容1</div>
      <Son name={name} age={age} />
      <div>父组件的内容2</div>
    </div>
  );
};

export default Test1;
