import React, { useState } from 'react';
import { produce, Producer } from 'immer';

//不可变数据: 不修改state的值,传入一个新的值.使用immer可以直接修改state的值
const Test1: React.FC = () => {
  const [userInfo, setUserInfo] = useState({ name: '张三', age: 18 });
  const changeAge = () => {
    // setUserInfo({
    //   ...userInfo,
    //   age: 24,
    // });

    //使用immer可以直接修改state的值
    setUserInfo(
      produce((draft) => {
        draft.age = 24;
      }),
    );
  };

  return (
    <div>
      <h1>不可变数据</h1>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>chage age</button>
    </div>
  );
};
export default Test1;
