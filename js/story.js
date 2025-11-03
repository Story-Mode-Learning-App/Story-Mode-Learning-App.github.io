var mainApp = {};
(function () {
  var firebase = app_firebase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      uid = user.uid;
      var nextbutton = document.getElementsByClassName("carousel-control-next")[0]
      nextbutton.addEventListener('click', fullscreen);
      var prevbutton = document.getElementsByClassName("carousel-control-prev")[0]
      prevbutton.addEventListener('click', fullscreen);
    } else {
      window.location.replace("../../../../");
    }
  });
})()

var iframe = document.getElementById("carouselFade");

function fullscreen() {
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
}

    $('#carouselFade').on('slid.bs.carousel', function () {
    const $carousel = $(this);
    const totalItems = $carousel.find('.carousel-item').length;
    const currentIndex = $carousel.find('.carousel-item.active').index() + 1;

    if (currentIndex === totalItems) {
      if (document.fullscreenElement) {
      document.exitFullscreen()
    }
    }
  });