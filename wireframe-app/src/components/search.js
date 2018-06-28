import React from 'react'
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css'
import { Input } from 'semantic-ui-react'

class Search extends React.Component{


    handleChange(event, data){
        this.props.onChangeFilter(data.value);
        console.log(data)
        data.loading = true;
        console.log(data)
    }

    render(){
        return (<form>
            <Input loading={false} size="big" icon='users' iconPosition='left' placeholder='Search...' type="text" onChange={this.handleChange.bind(this)}/>
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


