 import Item from './Item';
import Filter from './Filter';
import {PropTypes} from "prop-types"

const Items = ({ title, items }) => {
  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      <Filter searchTerm={''} onChange={() => {}} />
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
    </section>
  );
};

Items.propTypes = {
  title : PropTypes.string,
  items : PropTypes.array
}

export default Items;
