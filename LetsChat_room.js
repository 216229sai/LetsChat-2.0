
 var firebaseConfig = {
      apiKey: "AIzaSyDesLMUlbjs4UrmUOHZot2gvZFiwjlgJNw",
      authDomain: "kwitter-9ed36.firebaseapp.com",
      databaseURL: "https://kwitter-9ed36-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ed36",
      storageBucket: "kwitter-9ed36.appspot.com",
      messagingSenderId: "399153153365",
      appId: "1:399153153365:web:ea9ed5b647c73922399bdc"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
