import React, {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

const ListContacts = ({contact}) => {

    const [editMode, setEditMode] = useState(false);
    const [contactEditInput, setContactEditInput] = useState({
        ...contact
    });
    const deleteContact = () => {
        firebase.firestore().collection('contacts').doc(contact.id).delete()
            .then(() => {
                console.log('success')
            })
            .catch(error => {
                console.log(error);
            })
    };

    const update = () => {
        setEditMode(true);
    };

    const saveUpdated = () => {
        setEditMode(false);
        firebase.firestore().collection('contacts').doc(contact.id).update({
            contactEditInput
        }).catch(error => {
                console.log(error)
            }
        )
    };
    let editFirstName = contactEditInput.firstName;
    let editLastName = contactEditInput.lastName;
    let editHomeAddress = contactEditInput.homeAddress;
    let editPhoneNumber = contactEditInput.phoneNumber;
    let editEmailAddress = contactEditInput.emailAddress;

    if (editMode) {
        editFirstName = (
            <input type="text"
                   value={contactEditInput.firstName}
                   onChange={e => setContactEditInput({
                       firstName: e.target.value
                   })}
                   onBlur={saveUpdated}/>
        );

        editLastName = (
            <input type="text"
                   value={contactEditInput.lastName}
                   onChange={e => setContactEditInput({
                       lastName: e.target.value
                   })}
                   onBlur={saveUpdated}/>
        );

        editHomeAddress = (
            <input type="text"
                   value={contactEditInput.homeAddress}
                   onChange={e => setContactEditInput({
                       homeAddress: e.target.value
                   })}
                   onBlur={saveUpdated}/>
        );

        editPhoneNumber = (
            <input type="text"
                   value={contactEditInput.phoneNumber}
                   onChange={e => setContactEditInput({
                       phoneNumber: e.target.value
                   })}
                   onBlur={saveUpdated}/>
        );
        editEmailAddress = (
            <input type="text"
                   value={contactEditInput.emailAddress}
                   onChange={e => setContactEditInput({
                       emailAddress: e.target.value
                   })}
                   onBlur={saveUpdated}/>
        );
    }

    return (
        <div>
            .....................
            <p>{editFirstName}</p>
            <p>{editLastName}</p>
            <p>{editHomeAddress}</p>
            <p>{editPhoneNumber}</p>
            <p>{editEmailAddress}</p>
            <span onClick={update}>update contact</span>
            <span onClick={deleteContact}>delete contact</span>
        </div>
    )
};
export default ListContacts;
