
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
  // firebase.auth.Auth.Persistence.LOCAL
      //   create new user
      function createUser(email,password){
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
          let errorMessege=error.message;
          let errorCode=error.code;
          console.log(errorMessege);
        });
      }

      // login
    function login(email,password){
      firebase.auth().signInWithEmailAndPassword(email,password).catch(function(error){
        let message=error.message
        console.log(message)
      })
    }

    // user state


      