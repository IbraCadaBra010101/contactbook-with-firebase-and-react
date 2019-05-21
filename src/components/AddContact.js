import React, {useState} from 'react'
import 'firebase/firestore';
import firebase from 'firebase/app';
import Button from '@material-ui/core/Button';

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
    const form = {
        color: 'black',
        margin: 'auto',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        width: '300px',
        height: ' 240px',
        backgroundColor: '#ccc',
        borderRadius: '3px',
    };

    return (
        <React.Fragment>
            <form style ={form} >
                <label><h3>Add contact</h3></label>
                <input type="text"
                       value={firstName}
                       onChange={e => updateForm(e)}
                       name="firstName"
                       required
                />
                 <input type="text"
                       value={lastName}
                       onChange={e => updateForm(e)}
                       name='lastName'
                       required
                />
                 <input type="text"
                       value={homeAddress}
                       onChange={e => updateForm(e)}
                       name="homeAddress"
                       required
                />
                 <input type="text"
                       value={phoneNumber}
                       onChange={e => updateForm(e)}
                       name="phoneNumber"
                       required
                />
                 <input type="text"
                       value={emailAddress}
                       onChange={e => updateForm(e)}
                       name="emailAddress"
                       required
                />
                <Button onClick={handleAddContactClick}>Add contact</Button>
            </form>
        </React.Fragment>
    )
};

export default AddContact;