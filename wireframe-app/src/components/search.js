import React from 'react'
import { connect } from 'react-redux';


class Search extends React.Component{


    handleChange(){
        this.props.onChangeFilter(this.input.value);
    }

    render(){
        return (<form>
                     <input type="text" onChange={this.handleChange.bind(this)} ref={(input) => this.input = input}/>
               </form>)
    }
}

export default connect(
    state => ( {clients: state.clients, filter: state.filter} ),
    dispatch => ({
        onChangeFilter: (currentFilter) => {
            dispatch({type:"CHANGE_FILTER", payload: currentFilter})
        }
    })
)(Search);


