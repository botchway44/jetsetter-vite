import NewItem from './NewItem';
import Items from './Items';
import { inject, observer } from 'mobx-react';
 
const PackedItems = inject('itemList')(observer(({itemList})=>{ 
 return <Items title="Packed Items" items={itemList.packedItems} />
}));

const UnPackedItems = inject('itemList')(observer(({itemList})=>{ 
 return <Items title="Unpacked Items" items={itemList.unpackedItems} />
}));
 


const Application = () => {
  return (
    <div className="Application">
      <NewItem />
      <UnPackedItems  />
      <PackedItems  />
      <button className="button full-width">Mark All As Unpacked</button>
    </div>
  );
};



export default Application;
