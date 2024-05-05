import { 
  // makeObservable, observable, computed, action, autorun, 
  makeAutoObservable } from 'mobx';
import Item from './ItemModel';

export default class ItemStore {

  
 items = [];
unpackItemsFilter = ""
packItemsFilter = ""

 constructor(){
  // makeObservable(this,{
  //   items: observable,
  //   unpackItemsFilter: observable,
  //   packItemsFilter: observable,
  //   unpackedItems: computed,
  //   packedItems: computed,
  //   filteredPackedList: computed,
  //   filteredUnpackedList: computed,
  //   updatePackedItemsFilter: action.bound,
  //   addItem: action.bound,
  //   remove: action.bound
  // })

  makeAutoObservable(this);
 }


 get unpackedItems(){
  return this.items.filter(item => !item.packed)
 }

 get packedItems(){
  return this.items.filter(item => item.packed)
 }


 get filteredPackedList(){
  return this.packedItems.filter(item => item.value.includes(this.packItemsFilter))
 }
 get filteredUnpackedList(){
  return this.unpackedItems.filter(item => item.value.includes(this.unpackItemsFilter))
 }

 updatePackedItemsFilter(value){
  this.packItemsFilter = value
 }

 addItem(value){
    this.items.push(new Item(value, this)) 
  }

  remove(itemToRemove){
   this.items =  this.items.filter(item => item !== itemToRemove)
  }
}
