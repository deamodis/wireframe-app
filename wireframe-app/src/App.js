import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './components/Sidebar';
import { Button } from 'semantic-ui-react';

import './App.css';

class App extends React.Component {
    render() {
        return (<Sidebar/>);
    }
}

export default connect(
    state => ( {clients: state.clients, filter: state.filter} ),
    dispatch => ({})
)(App);
