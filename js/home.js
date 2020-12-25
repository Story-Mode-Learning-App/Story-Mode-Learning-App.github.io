var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
$.get('https://json.geoiplookup.io/', function(res) {var a = ("Reg. IP : " + res.ip + "<br>" + "District : " + res.district + "<br>" + "Country : " + res.country_name);document.getElementById("ip-details").innerHTML = a;});
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    uid = user.uid;
    uname = user.displayName;
    email = user.email;
    secured = user.providerId;
    emailVerified = user.emailVerified;
    photoUrl = user.photoURL;
        document.getElementById("dp").innerHTML = '<img src="' + photoUrl +'" class="dp" alt="dp">';
        document.getElementById("userName").innerHTML = "Name : " + uname;
        document.getElementById("uemail").innerHTML = "Email : " + email;
        document.getElementById("licenseFor").innerHTML = "License : " + uid;
        if(emailVerified == true) {
          document.getElementById("Subscription").innerHTML = "Subscription : Free Trial";
        }
        if(emailVerified != true) {
          document.getElementById("Subscription").innerHTML = "Subscription : Free Trial";
        }
if (user != null) {
  user.providerData.forEach(function (profile) {
    document.getElementById("secured").innerHTML = "Verified by : " + profile.providerId;
    // if(emailVerified != true) {
    // document.getElementById("userName").innerHTML = "Name : " + profile.uid;
    // document.getElementById("uemail").innerHTML = "Email : Not Required";
    // }
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