import React from 'react';
import { FixedSizeList } from 'react-window';
import './fixed-size-list.less';

/**
 * 每个列表项的组件
 * @param param  index:列表项的下标;  style:列表项的样式(不传,滚动到下方会出现空白)
 * @returns
 */
const Row = ({ index, style }: any) => {
  return (
    <div className={index % 2 ? 'ListItemOdd' : 'ListItemEven'} style={style}>
      Row{index}
    </div>
  );
};

const LongList: React.FC = () => {
  return (
    <FixedSizeList
      className="List"
      height={200} //列表可视区域的高度
      width={200} //列表可视区域的宽度
      itemSize={50} //列表项行高
      itemCount={1000} //列表项数据的数量
    >
      {Row}
    </FixedSizeList>
  );
};

export default LongList;
