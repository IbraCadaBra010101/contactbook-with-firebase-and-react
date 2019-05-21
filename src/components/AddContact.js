import React, {useState} from 'react'
import 'firebase/firestore';
import firebase from 'firebase/app';

const AddContact = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        homeAddress: "",
        phoneNumber: "",
        emailAddress: "",
    });

    const updateForm = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const {firstName, lastName, homeAddress, phoneNumber, emailAddress} = formData;

    const handleAddContactClick = e => {
        e.preventDefault();
        let contact = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            homeAddress: formData.homeAddress,
            phoneNumber: formData.phoneNumber,
            emailAddress: formData.emailAddress,
        };

        const collectionRef = firebase.firestore().collection('contacts');

        collectionRef.add(contact)
            .then(() => {
                console.log('Added contact');
            })
            .catch(error => {
                console.log('Error =>', error);
            });
    };

    return (
        <React.Fragment>
            <label><h3>Add contact</h3></label>
            <form>
                <label>First name:</label>
                <input type="text"
                       value={firstName}
                       onChange={e => updateForm(e)}
                       name="firstName"
                       required
                />
                <label>Last name:</label>
                <input type="text"
                       value={lastName}
                       onChange={e => updateForm(e)}
                       name='lastName'
                       required
                />
                <label>Home address:</label>
                <input type="text"
                       value={homeAddress}
                       onChange={e => updateForm(e)}
                       name="homeAddress"
                       required
                />
                <label>Phone Number:</label>
                <input type="text"
                       value={phoneNumber}
                       onChange={e => updateForm(e)}
                       name="phoneNumber"
                       required
                />
                <label>Email address:</label>
                <input type="text"
                       value={emailAddress}
                       onChange={e => updateForm(e)}
                       name="emailAddress"
                       required
                />
                <button onClick={handleAddContactClick}>Add contact!</button>
            </form>
        </React.Fragment>
    )
};

export default AddContact;