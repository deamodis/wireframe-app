import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter , Route} from 'react-router-dom';

import getDataFromJSON from './configuration/request_to_server' // get JSON via XHR and parse it
import reducer from './reducers/index' // get custom reducer

import './index.css';
import App from './App';
import itemDetail from  './components/itemDetail'


let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

getDataFromJSON(store);

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <div className="wrapper">
            <App/>
            <Route path="/item-detail/:id" component={itemDetail}/>
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'));


