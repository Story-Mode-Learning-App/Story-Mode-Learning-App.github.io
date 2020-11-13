(function () {
var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {

            return true;
          },
          uiShown: function() {
            document.getElementById('loader').style.display = 'none';
          }
        },
        signInFlow: 'popup',
        signInSuccessUrl: 'home.html',
        signInOptions: [

          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          // {
          //   provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          //   recaptchaParameters: {
          //     type: 'image',
          //     size: 'invisible',
          //     badge: 'bottomleft'
          //   },
          //   defaultCountry: 'BD',
      		// whitelistedCountries: ['BD', '+880', 'IN', '+91']
          // }
        ],
      }; 
ui.start('#firebaseui-auth-container', uiConfig);
})()

      var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    uid = user.uid;
    window.location.replace("home.html");
  }
});
})()