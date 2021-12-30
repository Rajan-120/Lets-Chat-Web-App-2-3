const firebaseConfig = {
  apiKey: "AIzaSyCNJSKffSUyGpukAgVkFihs3z58cSlREqY",
  authDomain: "let-s-chat-web-app-5b520.firebaseapp.com",
  databaseURL: "https://let-s-chat-web-app-5b520-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-web-app-5b520",
  storageBucket: "let-s-chat-web-app-5b520.appspot.com",
  messagingSenderId: "813625801298",
  appId: "1:813625801298:web:6e999489ab5bae6213bd8b"
};
firebase.initializeApp(firebaseConfig);

var userName = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + userName + "!!";

function addRoom()
{
  var roomName = document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomName).update({
    purpose:"new room added as "
  });
  localStorage.setItem("room_name", roomName);
}

function getData() 
{
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Names are " + Room_names);
   var div = "<div class='room_name' id="+ Room_names + "onclick='redirectToRoomName(this.id)'> #"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML +=div;
  });});}
getData();

function redirectToRoomName(name) 
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}