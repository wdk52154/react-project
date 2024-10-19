import React, { useEffect } from 'react';

//获取数据
const Case2: React.FC = () => {
  const queryData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([10, 20, 30]);
      }, 2000);
    });
  };

  useEffect(() => {
    const next = async () => {
      let data = await queryData();
      console.log(data);
    };
    next();
  }, []);
  return <></>;
};

export default Case2;
