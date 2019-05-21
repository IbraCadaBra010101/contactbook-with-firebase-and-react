import React from 'react';
import ListContacts from './ListContacts'

const ContactList = (props) => {
    let list = null;
    if (props.allContacts) {
        list = props.allContacts.map((contact) => (
            (
                <ListContacts key={contact.id} contact={contact}/>
            )
        ))
    }
    return (
        <div>
            <ul>{list}</ul>
        </div>
    )
};
export default ContactList;

