import React from 'react';
import { Input, message } from 'antd';

interface InputProps {
  save: (text: any) => void;
}

//输入框
const TodoInput: React.FC<InputProps> = ({ save }) => {
  //按下回车触发的方法
  const EnterTrigger = (e: any) => {
    if (e.keyCode === 13) {
      if (e.currentTarget.value) {
        save(e.currentTarget.value); //存
        e.currentTarget.value = ''; //清空
      } else {
        message.info('请输入内容');
      }
    }
  };
  return (
    <>
      <input placeholder="请输入内容" onKeyUp={EnterTrigger}></input>
    </>
  );
};

export default TodoInput;
