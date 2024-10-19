import React, { useReducer } from 'react';

//定义状态类型
interface State {
  count?: number;
}

//定义操作类型
interface Action {
  type: 'increment' | 'decrement';
}

//初始状态
const initialState: State = { count: 0 };
//
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: (state.count !== undefined ? state.count : 0) + 1 };
    case 'decrement':
      return { count: (state.count !== undefined ? state.count : 0) - 1 };
    default:
      return state;
  }
};
const Reducer1: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>增加</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>减少</button>
    </>
  );
};

export default Reducer1;
