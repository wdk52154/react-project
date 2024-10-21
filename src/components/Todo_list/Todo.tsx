import { Button } from 'antd';
import React from 'react';

interface TodoProps {
  id?: any;
  text?: any;
  isEnd?: boolean;
  del?: (id: any) => void;
  end?: (id: any) => void;
}

const Todo: React.FC<TodoProps> = ({ text, del, id, end, isEnd }) => {
  return (
    <div className="item">
      <h1>{text}</h1>
      <div className="op"></div>
      <Button
        onClick={() => {
          if (confirm('是否确认删除')) {
            del?.(id);
          }
        }}>
        删除
      </Button>
      <Button
        style={{ display: isEnd ? 'none' : '' }}
        onClick={() => {
          end?.(id);
        }}>
        完成
      </Button>
    </div>
  );
};

export default Todo;
