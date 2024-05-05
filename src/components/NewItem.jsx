import  { Component } from 'react';
import {PropTypes} from "prop-types"
import { inject } from 'mobx-react';



class NewItem extends Component {
  state = { value: '' };

  handleChange = (event) => {
    
   this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { value } = this.state;
    const {  itemsList } = this.props;
    
    event.preventDefault();
    
    // console.log({ value , } );
    // console.log("Itemlists",itemsList.itemList.items);
    itemsList.itemList.addItem(value);
    };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

NewItem.propTypes =  {
  onSubmit : PropTypes.func,
  itemsList : PropTypes.object
}

const NewItemInjected = inject( itemsList => ({
  itemsList: itemsList,
  })
)(NewItem)



export default NewItemInjected;
