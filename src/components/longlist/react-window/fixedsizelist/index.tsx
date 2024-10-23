import React from 'react';
import FixedSizeList from './FixedSizeList';
import './fisedsizelist.less';

const Row = ({ index, style }: any) => {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row{index}
    </div>
  );
};

const Index = () => {
  return (
    <FixedSizeList
      className="List"
      height={200}
      width={200}
      itemSize={50}
      itemCount={1000}>
      {Row}
    </FixedSizeList>
  );
};

export default Index;
