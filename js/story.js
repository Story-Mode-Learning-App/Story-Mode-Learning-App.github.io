var mainApp = {};
(function() {
    var firebase = app_firebase;
var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    uid = user.uid;
    var iframe = document.getElementsByClassName("carousel-control-next")[0]
    if (document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled) {

          if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
          } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
          } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
          } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
          }
        }
  }else {
      window.location.replace("../../../../");
  }
});
})()