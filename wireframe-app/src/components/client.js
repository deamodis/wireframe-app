import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Item } from 'semantic-ui-react'

class client extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){

    }


    render(){
        let clientData =  this.props.clients[this.props.id];

        return (<Item  onClick={this.handleClick} id={this.props.id}>
            <Item.Image size='tiny' src={clientData.general.avatar} alt={clientData.general.avatar}/>
            <Item.Content>
                <Item.Header className="name">{clientData.general.firstName}</Item.Header>
                <Item.Meta className="job_title">{clientData.job.title}</Item.Meta>
            </Item.Content>
        </Item>)
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
