import React from 'react';
import './Flex.less';

const Flex1: React.FC = () => {
  console.log(123);
  return (
    <>
      <div className="container">
        <div className="container_item">1</div>
        <div className="container_item">2</div>
        <div className="container_item">3</div>
      </div>
    </>
  );
};

export default Flex1;
