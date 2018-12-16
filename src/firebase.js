import firebase from 'firebase'


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBI8Z0hDAMdDm3h4iIsAchzvVjBpRatfQM",
    authDomain: "nodejs-authentication-9f276.firebaseapp.com",
    databaseURL: "https://nodejs-authentication-9f276.firebaseio.com",
    projectId: "nodejs-authentication-9f276",
    storageBucket: "nodejs-authentication-9f276.appspot.com",
    messagingSenderId: "494279901234"
}
firebase.initializeApp(config)

export const auth = firebase
