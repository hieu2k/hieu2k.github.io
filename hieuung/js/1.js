$(document).ready(function () {


    $('.noidung1').addClass('hienlen');
    $('.bg_den').addClass('hienlen1');
    $('.nut').click(function (e) { 
        e.preventDefault();
        
        $('.noidung1').addClass('hienlen');
        $('.bg_den').addClass('hienlen1');
        
    });
    var thongbao = setInterval(function(){
         $('.noidung1').removeClass('hienlen');
        $('.bg_den').removeClass('hienlen1');
        clearInterval(thongbao);
    },3000)
    $('.bg_den, .close_tap').click(function (e) { 
        e.preventDefault();
        $('.noidung1').removeClass('hienlen');
        $('.bg_den').removeClass('hienlen1');
    });
    
});

var nut1 = document.querySelectorAll('.nut1'),
    bg_den = document.querySelector('.bg_den'),
    close_tap = document.querySelectorAll('.close_tap');
    
for (let i = 0; i < nut1.length; i++) {
    
     var id;  
     var data_tenhu;   
    nut1[i].addEventListener('click',function(){
        var data_hieuung = this.getAttribute('data-hieuung');
            data_tenhu = this.getAttribute('data-tenhu');
            id = document.querySelector(data_hieuung); 
         id.classList.add(data_tenhu);
         bg_den.classList.add('hienlen1');
    }) 
    close_tap[i+1].addEventListener('click',function(){
        id.classList.remove(data_tenhu);
        bg_den.classList.remove('hienlen1');
    })
    bg_den.addEventListener('click',function(){
        id.classList.remove(data_tenhu);
        bg_den.classList.remove('hienlen1');
    })
}



