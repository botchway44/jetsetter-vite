import ReactDOM from 'react-dom/client'
import App from './components/Application'
import './index.css'

import {Provider} from "mobx-react"

import ItemList from "./store/ItemStore"

const itemList = new ItemList();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider itemList={itemList}>
    <App />
  </Provider>
)
