import React, { Component } from 'react';
import { connect } from 'react-redux';

class client extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){

    }


    render(){
        let clientData =  this.props.clients[this.props.id];

        return (<li onClick={this.handleClick} id={this.props.id}>
            <img src={clientData.general.avatar} alt={clientData.general.avatar}/>
            <div className="person_info">
                <div className="name">{clientData.general.firstName}</div>
                <div className="job_title">{clientData.job.title}</div>
            </div>
        </li>)
    }
}


export default connect(
    state => ( {clients: state.clients, filter: state.filter} ),
    dispatch => ({
        onClickItem: (itemIndex) => {
            dispatch({type:"bla-bla",payload: itemIndex})
        }
    })
)(client);
