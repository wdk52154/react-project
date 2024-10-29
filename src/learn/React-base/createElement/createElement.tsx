import React from 'react';

//创建一个React元素
const CreateElement: React.FC = () => {
  return React.createElement('div', { className: 'container' }, '你好');
};

export default CreateElement;
