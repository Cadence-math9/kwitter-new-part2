
var firebaseConfig = {
      apiKey: "AIzaSyB-hKYvw8VaogXJvCch2cb6D1Mt4LrMsaY",
      authDomain: "kwitter-app-92f56.firebaseapp.com",
      databaseURL: "https://kwitter-app-92f56-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-92f56",
      storageBucket: "kwitter-app-92f56.appspot.com",
      messagingSenderId: "76210322261",
      appId: "1:76210322261:web:d6d0e533fc777e30190ddc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name"); 
    function addRoom() {
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
      localStorage.setItem("room_name", room_name); 
      window.location = "kwitter_page.html";
    }
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey; 
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;
       
      //End code
      });});}
getData();
function redirectToRoomName(name) 
{ console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
