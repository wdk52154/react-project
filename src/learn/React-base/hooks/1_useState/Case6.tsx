import React, { useState } from 'react';

//更新state中的对象
const Case6: React.FC = () => {
  const [userInfo, setUserInfo] = useState({ name: 'wdk', age: 24 });
  //修改name的函数
  const changeName = () => {
    setUserInfo({
      ...userInfo,
      name: 'kangkang',
    });
  };

  return (
    <>
      <div>{userInfo.name}</div>
      <button onClick={changeName}>changeName</button>
    </>
  );
};

export default Case6;
