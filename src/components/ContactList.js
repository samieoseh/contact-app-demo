import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props)
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} onClickHandler={deleteContactHandler} key={contact.id}/>
        )
    })
    return (
        <div>
            <div className="ui">
                <div className="ui container">
                    <h2>Contact List</h2>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    )
}

export default ContactList