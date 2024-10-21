import React, { useState } from 'react';

//案例:输入框输入,下面多一个li
const Case1: React.FC = () => {
  const [list, setList] = useState<any>([]);
  //按键被释放时触发
  const handle = (e: any) => {
    if (e.keyCode === 13) {
      const value = e.currentTarget.value;
      if (value) {
        setList([...list, value]);
        e.currentTarget.value = '';
      } else {
        alert('请输入内容');
      }
    }
  };
  return (
    <>
      <input type="text" placeholder="请输入内容" onKeyUp={handle} />
      <ul style={{ width: '500px', height: '500px', background: 'pink' }}>
        {list.map((item: any) => (
          <li key={crypto.randomUUID()} style={{ border: '1px solid black' }}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Case1;
