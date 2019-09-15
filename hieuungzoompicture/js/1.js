document.addEventListener("DOMContentLoaded",function(){

    var tieude_card = document.querySelectorAll('h5.mb-0 a'),
        bg_card = document.querySelectorAll('.card-header');   
    

    for (var i = 0; i < tieude_card.length; i++) {     
        tieude_card[i].addEventListener('click',function(){
            this.classList.toggle('title_noidung');
        })     
    }
   
},false) 
$(document).ready(function () {
    //XƯ LY PHẦN FANCYBOX
    $('.picture a').fancybox({
        buttons : [ 
          'slideShow',
          'share',
          'zoom',
          'fullScreen',
          'close',
          'thumbs'
        ],
      });
      //XỬ LÝ PHẦN CUỘN CHUỘT
      $('h5.mb-0:nth-child(1) a').click(function (e) { 
          e.preventDefault();
          $('body').animate({scrollTop:$(this).offset().top},400);
          $('html').animate({scrollTop:$(this).offset().top},400);
      });

});   