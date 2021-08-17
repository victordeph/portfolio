document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    $('.parallax').parallax();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  $('.preloader-background').delay(1500).fadeOut('slow');
  $('.preloader-wrapper')
    .delay(800)
    .fadeOut();
});

document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function(){
  $('.carousel').carousel({
  dist: 0,
  padding: 0,
  fullWidth: true,
  indicators: true,
  duration: 100,
  
  });

  autoplay()   
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 10000);
  }
  });
});
