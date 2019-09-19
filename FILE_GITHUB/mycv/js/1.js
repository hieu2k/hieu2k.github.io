document.addEventListener('DOMContentLoaded',function(){
    //-------------xư lý cuộn chuột cho menu-------------
    var menu = document.querySelector('.menu')
    window.addEventListener('scroll',function(){
        if (window.pageYOffset >100){
            menu.classList.add('background');
        }
        else{
            menu.classList.remove('background');
        }
        
    })


    //-----------End xử lý cuộn chuột cho menu----------

    //-----------xử lý show hình ảnh khi click----------
    var _1khoi = document.querySelectorAll('._1khoi'),
        btn = document.querySelectorAll('._1khoi .btn'),
        bg = document.querySelector('.after_ct_4 .bg'),
        after_ct_4 = document.querySelector('.after_ct_4'),
        inside_btn = document.querySelectorAll('.inside_btn');

    console.log(inside_btn);
    
        var show;

        for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click',function(){
                bg.classList.add('active');
                after_ct_4.classList.add('active');
                var id = _1khoi[i].getAttribute('data-picture');
                show = document.querySelector(id); 
                show.classList.add('active');
            })  
            inside_btn[i].addEventListener('click',function(){ 
            bg.classList.remove('active');
            after_ct_4.classList.remove('active'); 
            show.classList.remove('active');
        })

        }
       
        
        bg.addEventListener('click',function(){ 
            bg.classList.remove('active');
            after_ct_4.classList.remove('active'); 
            show.classList.remove('active');
        })
       

    //----------END xử lý show hình ảnh khi click-------
},false)