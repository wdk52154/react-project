import React, { useState } from 'react';
import TodoInput from './TodoInput';
import Todos from './Todos';

//定义list类型
interface List {
  list?: any;
  text?: any;
  id?: any;
  del?: (id: any) => void;
  end?: (id: any) => void;
}

const Todolist: React.FC = () => {
  const [list, setList] = useState<List[]>([]);

  //存
  const save = (text: any) => {
    setList((v) => [...v, { id: crypto.randomUUID(), text }]);
  };

  //删除
  const del = (id: any) => {
    setList((v) => {
      return v.filter((item) => {
        return item.id !== id;
      });
    }); //当前的id和传过来的id不一样,过滤出去
  };

  //完成
  const end = (id: any) => {
    setList(
      (v) => v.map((item) => (item.id == id ? { ...item, isEnd: true } : { ...item })), //当前的id和传过来的id一样,
    );
  };
  return (
    <div className="todolist">
      <TodoInput save={save} />
      <hr />
      <Todos list={list} del={del} end={end} />
    </div>
  );
};

export default Todolist;
