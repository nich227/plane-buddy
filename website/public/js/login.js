firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user);
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;
    var id = firebase.auth().id;
    if(user != null){

      var email_id = user.email;
      console.log(currentUser);
      console.log(user);
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      //var id = user.

      document.getElementById("login_status").innerHTML = "Sign out";
    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

    document.getElementById("login_status").innerHTML = "Sign in";
  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  //var id = document.getElementById("User_UID").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    window.alert("Error : " + errorMessage);
  });

}

/*function getUsrId(){
  firebase.auth().
}*/


function logout(){
  firebase.auth().signOut();
}


function continueToMatching(){
  window.location = "matching.html";
}
