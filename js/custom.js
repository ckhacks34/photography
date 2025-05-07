$('.slick-carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 420,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 3,
    }
  }]
});

// Add smooth scrolling to all links
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
