function addUser(){
    userName = document.getElementById("user_name").value;
    localStorage.setItem("user_name", userName);
    check();
}
function check(){
    if(userName == ""){
        window.alert("Write the USERNAME to continue...");
    }
    else{
        window.location = "kwitter_room.html";
    }
}