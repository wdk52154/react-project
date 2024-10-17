import React from 'react';
import ReactDOM from 'react-dom/client';
//全局样式和初始样式
import '@/global.less';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <>
    <App />
  </>
);
