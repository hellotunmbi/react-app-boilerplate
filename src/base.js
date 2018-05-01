import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC9187DhKxz0wMO2OY2ZuAB7WXfyriJ93A",
    authDomain: "onlinechurch-v3.firebaseapp.com",
    databaseURL: "https://onlinechurch-v3.firebaseio.com"
  });


const base = Rebase.createClass(firebaseApp.database());


export { firebaseApp };

export default base;