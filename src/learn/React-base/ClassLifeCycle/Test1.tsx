import React, { Component } from 'react';

//类组件的生命周期
class Test1 extends Component {
  /*1 挂载阶段 */
  //初始化的时候执行
  constructor(props: any) {
    super(props);
    console.log('组件挂载之前调用一次');
  }
  //组件挂载成功之后执行
  componentDidMount() {
    console.log('组件挂载成功之后执行');
  }

  /*2 更新阶段 */
  //组件更新之后执行
  componentDidUpdate() {
    console.log('组件更新之后执行');
  }

  /*3 卸载阶段 */
  //组件卸载的时候执行
  componentWillUnmount() {
    console.log('组件卸载的时候执行');
  }

  //返回要渲染的JSX;每次渲染都会调用
  render() {
    console.log('render');
    return (
      <>
        <div>124</div>
      </>
    );
  }
}

export default Test1;
