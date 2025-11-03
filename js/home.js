var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    uid = user.uid;
    uname = user.displayName;
    email = user.email;
    secured = user.providerId;
    emailVerified = user.emailVerified;
    photoUrl = user.photoURL;
        document.getElementById("dp").innerHTML = '<img src="' + photoUrl +'" class="rounded mx-auto d-block" alt="dp">';
        document.getElementById("userName").innerHTML = "<strong>Name :</strong> " + uname;
        document.getElementById("userName2").innerHTML = "<strong>Phone :</strong> N/A";
        document.getElementById("uemail").innerHTML = "<strong>Email :</strong> " + email;
        document.getElementById("licenseFor").innerHTML = "<strong>License :</strong> " + uid;
        if(emailVerified == true) {
          document.getElementById("Subscription").innerHTML = "<strong>Subscription :</strong> Free Trial";
        }
        if(email == null) {
          document.getElementById("uemail").innerHTML = "<strong>Email :</strong> N/A";
        }
        if(emailVerified != true) {
          document.getElementById("Subscription").innerHTML = "<strong>Subscription :</strong> Free Trial";
        }
        if(uname == null) {
          document.getElementById("userName").innerHTML = "<strong>Name :</strong> N/A";
          document.getElementById("uemail").innerHTML = "<strong>Email :</strong> N/A";
          document.getElementById("dp").innerHTML = "";
        }
if (user != null) {
  user.providerData.forEach(function (profile) {
    document.getElementById("secured").innerHTML = "<strong>Verified by :</strong> " + profile.providerId;
  });
}
if (user != null && uname == null) {
  user.providerData.forEach(function (profile) {
    document.getElementById("secured").innerHTML = "<strong>Verified by :</strong> " + profile.providerId;
    document.getElementById("userName2").innerHTML = "<strong>Phone :</strong> " + profile.uid;
  });
}
  }else {
      window.location.replace("index");
  }
});
    function logOut(){
        firebase.auth().signOut();
    }
    mainApp.logOut = logOut;
})()
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
