import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
// import ListContacts from './components/ListContacts';

const App = () => {
    const [contact, setContact] = useState(null);
    // const [filterContacts, setFilterContact] = useState(null);

    useEffect(() => {
        const db = firebase.firestore().collection('contacts');
        db.onSnapshot(snapShot => {
            let contactList = [];
            snapShot.forEach(doc => {
                let obj = {
                    ...doc.data(),
                    id: doc.id,

                };
                contactList.push(obj);
            });
            setContact(contactList);
        });
    }, []);

    // const filtering = e => {
    //     setFilterContact(e.target.value)
    // };
    return (
        <div>

            <AddContact/>
            <ContactList allContacts ={contact}/>


        </div>
    );
};
export default App;
