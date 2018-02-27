var waypoints = $(".wp-anchor").waypoint(function(direction) {
  $(this.element).addClass("typed");
}, {
  offset: '75%'
});

    var waypoints = $(".skill").waypoint(function(direction) {
      $(this.element).addClass(this.element.id)
      }, {
  offset: '85%'
});


  
  console.log($(window).width())

  $(window).on("scroll", function() {
    $("header").toggleClass("scrolled-header", $(this).scrollTop() > 130);
    var screenWidth = $(window).width();
    if ($("header").hasClass("scrolled-header")|| screenWidth < 768) {
       $(".title").css("display","inline-block");
       // $(".title > span").css("display","inline")
    } else {
      $(".title").css("display","none")
    }
});

  


  var scrollLink = $(".scroll");

  scrollLink.click(function(e){
    e.preventDefault();
    $("body,html").animate({
      scrollTop: $(this.hash).offset().top
    },1000)
  });

$(".mobile-menu").on("click", function() {
  $(".menu-links").toggleClass("menu-visible");
});

$(window).resize(function(){
 if($(window).width()>768){
  $('.menu-links').removeClass("menu-visible");
 }
});



var map;
  function initMap() {
    var peckham = {lat: 51.471330, lng: -0.069523}
    map = new google.maps.Map(document.getElementById('map'), {
      center: peckham,
      zoom: 10
    });
    var marker = new google.maps.Marker({
          position: peckham,
          map: map
        });
  }