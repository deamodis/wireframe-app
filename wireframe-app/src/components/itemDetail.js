import React from 'react'
import { connect } from 'react-redux';



class ItemDetail extends React.Component{
    render(){

        const id = this.props.match.params.id;
        let clientDetail = this.props.clients[id];

        // ??? V
        try {
            clientDetail.general.firstName; // если у нас не было ответа с сервера, тогда выведем <div>Loading..</div>
                                            // в противном же случае рендерим то, что получили с сервера
        } catch (e) {
            return (<div>Loading...</div>)
        }

        return (<div className="detailed_information">
                <div>{clientDetail.general.firstName}</div>
                    <div>{clientDetail.general.lastName}</div>
                    <div>{clientDetail.job.company}</div>
                </div>)
    }
}

export default connect(
    state => ( {clients: state.clients, filter: state.filter} ),
    dispatch => ({})
)(ItemDetail);
