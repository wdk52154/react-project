import { count_value, decrement, increment } from '@/redux/slice/home';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home: React.FC = () => {
  const count = useSelector(count_value);
  console.log('count', count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Home页</h1>
      <div>
        <div>{count}</div>
        <button
          onClick={() => {
            dispatch(increment());
          }}>
          增加
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}>
          减少
        </button>
      </div>
    </>
  );
};

export default Home;
