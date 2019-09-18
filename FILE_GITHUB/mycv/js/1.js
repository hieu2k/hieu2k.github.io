document.addEventListener("DOMContentLoaded",function(){
   

},false)


$(document).ready(function () {

  //-----phan cuon chuot cho cac page khac nhau cua web----------
    $('ul li.nav-item:nth-child(1) a.nav-link').click(function (e) { 
      e.preventDefault();
      $('body').animate({scrollTop:$('.content_1').offset().top},400);
      $('html').animate({scrollTop:$('.content_1').offset().top},400); 
    });
    $('ul li.nav-item:nth-child(2) a.nav-link').click(function (e) { 
      e.preventDefault();
      $('body').animate({scrollTop:$('.content_2').offset().top},400);
      $('html').animate({scrollTop:$('.content_2').offset().top},400); 
    });
    $('ul li.nav-item:nth-child(3) a.nav-link').click(function (e) { 
      e.preventDefault();
      $('body').animate({scrollTop:$('.content_3').offset().top},400);
      $('html').animate({scrollTop:$('.content_3').offset().top},400);     
    });
  //------End phan cuon chuot do-------------------------------------


  //--------------slide slick cho phan content_3---------------------
$('.child').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: $('.next'),
  prevArrow: $('.prevous'),
  responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
});       

  //--------------end slide slick do----------------------------



});