// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCzVDxIeq4d2ehkS_izCb9Rp0tuE3WTTP4",
    authDomain: "tribals-1c642.firebaseapp.com",
    databaseURL: "https://tribals-1c642.firebaseio.com",
    projectId: "tribals-1c642",
    storageBucket: "tribals-1c642.appspot.com",
    messagingSenderId: "585062064664",
    appId: "1:585062064664:web:8149eaf4e60570f040196d",
    measurementId: "G-SYX6WSMK41"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var currentUser = {};
// document.getElementById("submit").addEventListener('click',submit)
// function submit(){
//     let email=document.getElementById('email').value
//     let password=document.getElementById('pass').value
//     createNewUser(email,password)
// }

// create User

function createNewUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)
    });

}


function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorMessage)
    });
}

// logout

// onAuth
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
        currentUser = user;
        // location.href="User.html"
        console.log("has logged in");
    } else {
        // User is signed out.
        // ...
        // location.href="index.html"
        console.log("has logged out")
    }
});



// Get a reference to the database service
var database = firebase.database();
function writeUserData(name, pass) {
    firebase.database().ref('users/').child("ashish").child('pass').set({
        username: name,
        pass: pass,
        email: currentUser.email
    });
    console.log("successfully addd")
    // console.log(firebase.database().ref('users/').getValue())

var starCountRef = firebase.database().ref('users/');
starCountRef.on('value', function (snapshot) {
    snapshot.forEach(function(childSnap){
        var item=childSnap.val()
        console.log(item)
        item.key=childSnap.key
        console.log(item.key)
    })
});
}