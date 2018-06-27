import React from 'react';
import { connect } from 'react-redux';
import Client from './client';
import { Link } from 'react-router-dom'
import Search from './search'


class sidebar extends React.Component{

    render(){

        // It is necessary to rewrite Filter search

        let clients = this.props.clients;
        let filter = this.props.filter.toUpperCase();

        let indicesFilterElements = [];
        let newListItems = [];

        let listItems = clients.map((CurrentElement, index)=> {
            return (<Link to={`/item-detail/${index}`}><Client id={index}/></Link>);
        });


        for(let i = 0; i < clients.length; i++){
            if(clients[i].general.firstName.toUpperCase().includes(filter) || clients[i].general.lastName.toUpperCase().includes(filter)){
                indicesFilterElements.push(i);
            }
        }

        let index = 0;
        console.log(indicesFilterElements);

        for(let i = 0; i < listItems.length; i++){
            newListItems[i] = listItems[ indicesFilterElements[index++] ]
        }

        return (<div>
            <Search/>
            <ul className="clients_list">
                {newListItems}
            </ul>
        </div>);
    }
}



export default connect(
    state => ( {clients: state.clients, filter: state.filter} ),
    dispatch => ({
        // onClickItem: (item)
    })
)(sidebar);
