function buttonChange() {      
    document.getElementById("trick").innerHTML="Share";
    if (document.fullscreenElement) {
      document.exitFullscreen()
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