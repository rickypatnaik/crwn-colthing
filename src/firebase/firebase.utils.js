import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyDknTkJq6mm5pwAqB6XeYYJ1UixFt91FrE',
	authDomain: 'crwn-db-daa29.firebaseapp.com',
	databaseURL: 'https://crwn-db-daa29.firebaseio.com',
	projectId: 'crwn-db-daa29',
	storageBucket: 'crwn-db-daa29.appspot.com',
	messagingSenderId: '606898904551',
	appId: '1:606898904551:web:cd218b18cdccc50a3cf142',
	measurementId: 'G-D24GBSK6EG',
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
