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
        // "general": {
        //          "firstName": "Liana",
        //         "lastName": "Crooks",
        //         "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
        // },
        // "job": {
        //     "company": "Ledner, Johnson and Predovic",
        //         "title": "Investor Functionality Coordinator"
        // },
        // "contact": {
        //     "email": "Gerry_Hackett77@gmail.com",
        //         "phone": "(895) 984-0132"
        // },
        // "address": {
        //     "street": "1520 Zemlak Cove",
        //         "city": "New Devon",
        //         "zipCode": "42586-7898",
        //         "country": "Guinea-Bissau"
        // }
        return (<div className="detailed_information">
            <img src={clientDetail.general.avatar} alt={clientDetail.general.avatar}></img>
            <div className="firstName">First Name: {clientDetail.general.firstName}</div>
            <div className="lastName">Last Name: {clientDetail.general.lastName}</div>
            <div className="company">Company: {clientDetail.job.company}</div>
            <div className="title">Title: {clientDetail.job.title}</div>
            <div className="email">Email: {clientDetail.contact.email}</div>
            <div className="phone">Phone: {clientDetail.contact.phone}</div>
            <div className="street">Street: {clientDetail.address.street}</div>
            <div className="city">City: {clientDetail.address.city}</div>
            <div className="zipCode">ZipCode: {clientDetail.address.zipCode}</div>
            <div className="country">Country: {clientDetail.address.country}</div>
        </div>)
    }
}

export default connect(
    state => ( {clients: state.clients, filter: state.filter} ),
    dispatch => ({})
)(ItemDetail);
