import React from 'react';
import Todo from './Todo';

interface TodosProps {
  list?: any;
  id?: any;
  del?: (id: number) => void;
  end?: (id: any) => void;
}
const Todos: React.FC<TodosProps> = ({ list, del, end }) => {
  return (
    <div className="todos">
      {list.map((item: any) => {
        return <Todo key={item.id} {...item} del={del} end={end} />;
      })}
    </div>
  );
};

export default Todos;
