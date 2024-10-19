import React from 'react';

//JSX语法-标签
const Test1: React.FC = () => {
  const list = (
    //Fragment:<>...</>，返回多个元素
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );

  return <>{list}</>;
};

export default Test1;
