import React from "react";
import ContactCard from "./ContactCard";
import {Link} from "react-router-dom";

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.DeleteContactHandler(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        DeleteContactHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });
  return (
    <div class="main">
      <h2>Contact List
      </h2>
      <Link to="/add"><button className="ui button blue right">Add Contact</button></Link>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
