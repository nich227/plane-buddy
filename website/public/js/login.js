firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        var uid = user.uid; //variable uid, has uid to get data base related file UID
        console.log(uid);
        var database = firebase.database();
        var ref = database.ref('users');
        ref.on('value', gotData, errData);
        //console.log(arr);
        var data = { //set data to push, get from usr choice
          usr: uid, 
          resp: "Babies"//actual response go here
        }
        console.log(ref.push(data)); 
        //console.log(data.val);
       // var ref = database.ref('users');
        //ref.on('value', gotData, errData);
      }
    });
    var user = firebase.auth().currentUser;
    var id = firebase.auth().id;
    if(user != null){

      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    }
 
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function gotData(data){//get data from firebase
  console.log(data.val());
  var usr = data.val();
  console.log(usr);
  var keys = Object.keys(usr);
  console.log(keys);
  for(var i = 0; i < keys.length; i++){
    var k = keys[i];
    var user = usr[k].usr;
    var resp = usr[k].resp;
    console.log(user, resp);
  }
  //return console.log(usr);
  //return usr;
}

function errData(err){
  console.log("Error");
  console.log(err);
}


function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
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

function continueToMatching() {
  window.location = "matching.html";
}