import React, { useState } from 'react';

let nextId = 0;
//更新state中的数组
const Case7: React.FC = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState<any>([]);
  console.log(list);
  return (
    <>
      <h1>更新state中的数组</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setList([
            ...list,
            {
              id: nextId++,
              name: name,
            },
          ]);
        }}>
        添加
      </button>
      <ul>
        {list.map((item: any) => {
          return (
            <div key={item.id}>
              <div>{item.name}</div>
              <button
                onClick={() => {
                  setList(list.filter((a: any) => a.id !== item.id));
                }}>
                删除
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Case7;
