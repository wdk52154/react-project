import React from 'react';
import './Flex.less';
//自适应导航案例
const FlexTest: React.FC = () => {
  const data = [
    {
      id: 1,
      text: '建设概览',
    },
    {
      id: 2,
      text: '机构设置',
    },
    {
      id: 3,
      text: '人才培养',
    },
    {
      id: 4,
      text: '学术科研',
    },
    {
      id: 5,
      text: '校园文化',
    },
    {
      id: 6,
      text: '合作交流',
    },
    {
      id: 7,
      text: '招生就业',
    },
    {
      id: 8,
      text: '校友会',
    },
    {
      id: 9,
      text: '荣誉榜',
    },
    {
      id: 10,
      text: '信息公开',
    },
  ];
  return (
    <div className="flextest">
      {data.map((item) => {
        return (
          <div className="flextest_item" key={item.id}>
            {item.text}
          </div>
        );
      })}
    </div>
  );
};

export default FlexTest;
