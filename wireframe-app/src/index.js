import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import getDataFromJSON from './configuration/request_to_server' // get JSON via XHR and parse it
import reducer from './reducers/index' // get custom reducer
import { Provider } from 'react-redux';
import { BrowserRouter , Route, Link} from 'react-router-dom';


let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

getDataFromJSON(store);

ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>, document.getElementById('root'));


