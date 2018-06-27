import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from './components/Sidebar';
import './App.css';


class App extends React.Component {
    render() {
        return (<div className="container"><Sidebar/></div>)
    }
}
//???
export default connect(
    state => ( {clients: state.clients, filter: state.filter} ),
    dispatch => ({})
)(App);
