import React from 'react';
import user from "../images/user.png";
import {Link} from 'react-router-dom';

//const ContactCard = ({contact, DeleteContactHandler}) => {
const ContactCard = (props) => {
    const {id, name, email} = props.contact;

    return (
        <div className="item">
            <img className ="ui avatar image" src={user} alt="user"/>
            <div className="content">
                <Link to={{pathname:`/contact/${id}`,
                    state:{contact: props.contact} }}>
                <div className="header">{name}</div>
                <div>{email}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px" }}
                onClick={() => props.DeleteContactHandler(id)}
                ></i>
        </div>
    );
};

export default ContactCard

//TODO: Move Delete to separate component, separate page with confirmation