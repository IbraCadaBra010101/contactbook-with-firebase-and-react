import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'firebase/firestore';
import firebase from 'firebase/app';
import firebaseConfig from './config/firebaseConfig';

firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
