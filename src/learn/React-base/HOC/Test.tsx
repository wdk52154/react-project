import React, { useEffect, useState } from 'react';

//高阶组件：是一个函数,接收的参数是一个组件,返回一个新组件

const WithLoading = (Component: any) => {
  return function HOC() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    }, []);
    if (isLoading) {
      return <div>loading...</div>;
    } else {
      return <Component />;
    }
  };
};

const Test: React.FC = () => {
  const data = [
    {
      id: 1,
      name: '张三',
      age: 18,
    },
    {
      id: 2,
      name: '李四',
      age: 20,
    },
    {
      id: 3,
      name: '王天',
      age: 24,
    },
  ];

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name}--{item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WithLoading(Test);
