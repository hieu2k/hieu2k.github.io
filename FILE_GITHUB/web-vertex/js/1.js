document.addEventListener("DOMContentLoaded",function(){
    //value contact HTML
    let show_menu_items = document.getElementById('menu_items');
    let buttom_bars = document.querySelector('.buttom_bars');
    let buttom_search = document.querySelector('.wapper .search i.parents');
    let search_web = document.querySelector('.wapper .search .items');
    let body_web = document.querySelector('.body_web');
    let info_web = document.querySelector('.info_web');
    let menu = document.querySelector('.menu');
    
    //Event click buttom_bars,buttom_search
    buttom_bars.addEventListener("click",function(){
        show_menu_items.classList.toggle('show');
        body_web.classList.toggle('off_scroll');
    })
    buttom_search.addEventListener("click",function(){
        search_web.classList.toggle('show');
    })
    // End Event click buttom_bars,buttom_search

    // xu ly phan cuon chuot
    window.addEventListener("scroll",function(){
        if (window.pageYOffset > 10) {
            info_web.classList.add('show');
            menu.classList.add('bg_while');
        }
        else{
            info_web.classList.remove('show');
            menu.classList.remove('bg_while');
        }
    })
     
},false)


$(document).ready(function () {
    //slide slick  
    $('.slide_slick').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prevous'),
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 414,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });       
      // xử lý phần facybox cho video
      $('.card-deck a,.button_youtube a').fancybox({
        caption : function( instance, item ) {
          return $(this).parent().find('.card-text').html(); //thêm dòng text ở dưới video
        }
      });
});