import uniqueId from 'lodash/uniqueId';
import {makeObservable, observable, action, computed, } from 'mobx';

export default class Item {
    id = uniqueId();
    store;
    value = ""
    packed = false


    constructor(value, store){
      // makeAutoObservable(this);
      makeObservable(this,{
        value : observable,
        packed : observable,
        unpacked : computed,
        toggle : action.bound,
        remove : action.bound
      })

      this.value = value;
      this.store = store;
    }


    get unpacked(){
      return !this.packed
    }

    toggle(){
      this.packed = !this.packed
    }

    remove(){
      this.store.remove(this)
    }
}
