import React, { useEffect, useState } from 'react';

//从Effect中读取最新的state
const Case4: React.FC = () => {
  const [name, setName] = useState('wdk');
  const [age, setAge] = useState(18);

  useEffect(() => {
    console.log('name', name);
  }, [name]);
  useEffect(() => {
    console.log('age', age);
  }, [age]);
  return (
    <>
      <h1>{name}</h1>
      <button onClick={() => setName('张三')}>change name</button>
      <h1>{age}</h1>
      <button onClick={() => setAge((age) => age + 1)}>age++;</button>
    </>
  );
};

export default Case4;
