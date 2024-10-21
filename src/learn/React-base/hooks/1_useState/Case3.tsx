import React, { useState } from 'react';

const Case3: React.FC = () => {
  const [num, setNum] = useState(0);

  const handle = () => {
    setNum(num + 1);
    console.log(num);
  };
  return (
    <>
      <div>{num}</div>
      <button onClick={handle}>add</button>
    </>
  );
};

export default Case3;
