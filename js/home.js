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
        document.getElementById("userName").innerHTML = "Name : " + uname;
        document.getElementById("userName2").innerHTML = "Phone : N/A";
        document.getElementById("uemail").innerHTML = "Email : " + email;
        document.getElementById("licenseFor").innerHTML = "License : " + uid;
        if(emailVerified == true) {
          document.getElementById("Subscription").innerHTML = "Subscription : Free Trial";
        }
        if(emailVerified != true) {
          document.getElementById("Subscription").innerHTML = "Subscription : Free Trial";
        }
        if(uname == null) {
          document.getElementById("userName").innerHTML = "Name : N/A";
          document.getElementById("uemail").innerHTML = "Email : N/A";
          document.getElementById("dp").innerHTML = "";
        }
if (user != null || uname == null) {
  user.providerData.forEach(function (profile) {
    document.getElementById("secured").innerHTML = "Verified by : " + profile.providerId;
    document.getElementById("userName2").innerHTML = "Phone : " + profile.uid;
  });
}
  }else {
      window.location.replace("index.html");
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
