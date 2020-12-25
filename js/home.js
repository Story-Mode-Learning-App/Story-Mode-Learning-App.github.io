var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    uid = user.uid;
        email = user.email;
        secured = user.providerId;
        emailVerified = user.emailVerified;
        document.getElementById("uemail").innerHTML = "Email : " + email;
        document.getElementById("secured").innerHTML = "Licensed for : " + secured;
        document.getElementById("licenseFor").innerHTML = "License : " + uid;
        if(emailVerified == true) {
          document.getElementById("Subscription").innerHTML = "Subscription : Free Trial";
        }
        if(emailVerified != true) {
          document.getElementById("Subscription").innerHTML = "Subscription : Free Trial";
        }
if (user != null) {
  user.providerData.forEach(function (profile) {
    document.getElementById("secured").innerHTML = "Encripted by : User " + profile.providerId;
  });
}
  }else {
      window.location.replace("index.html");
      console.log("ok")
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