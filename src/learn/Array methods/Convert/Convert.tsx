import React from 'react';

//转换
const Convert: React.FC = () => {
  /*
    1 join('参数') 把数组的元素以传入的参数为分割符,转换成字符串
    */
  const arr = [1, 2, 3, 4, 5];
  const str1 = arr.join(',');
  const str2 = arr.join('-');
  console.log(str1); //1,2,3,4,5
  console.log(str2); //1-2-3-4-5
  return <></>;
};

export default Convert;
