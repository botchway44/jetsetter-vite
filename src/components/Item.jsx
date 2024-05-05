import {PropTypes} from "prop-types"



const Item = ({ item }) => {
  console.log(item, item.packed, item.id, )
  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => item.toggle()}
          id={item.id}
        />
        {item.value}
      </label>
      <button className="Item-remove" onClick={ ()=> item.remove() }>
        Remove
      </button>
    </article>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};


export default Item;
