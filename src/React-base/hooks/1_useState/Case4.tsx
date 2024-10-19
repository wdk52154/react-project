import React, { useState } from 'react';

//为组件添加状态
const Case4: React.FC = () => {
  //字符串
  const [name, setName] = useState('wdk');
  //数字
  const [age, setAge] = useState(18);
  //布尔
  const [flag, setFlag] = useState(true);
  //数组
  const [list, setList] = useState([]);
  //对象
  const [userInfo, setUserInfo] = useState({ name: 'wdk', age: 18 });

  //面试题
  const data = { name: 'wdk', age: 18 };
  data.name = '123';
  console.log(data); //{name: '123', age: 18}
  return <></>;
};

export default Case4;
