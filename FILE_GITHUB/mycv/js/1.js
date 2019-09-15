document.addEventListener("DOMContentLoaded",function(){
   //scroll > 200px ---> disp background : white
    var menu = document.querySelector('.menu'),
        text_menu = document.querySelectorAll('ul.navbar-nav li.nav-item a.nav-link'),
        logo = document.querySelector('.header .navbar a.navbar-brand'),
        buttom_info = document.querySelector('button.btn.btn-success.show'),
        content_1 = document.querySelector('.content_1'),
        content_2 = document.querySelector('.content_2'),
        profile_menu = document.querySelector('.profile_menu'),
        local_ct1 = content_1.offsetTop, // vi tris cua content 1
        local_ct2 = content_2.offsetTop,
        col_sm_6 = document.querySelectorAll('.content_2 .wrapper .col-lg-6 .col-sm-6'); // vi tris cua content 2
        
   window.addEventListener('scroll', function(){
      if(this.window.pageYOffset>100){
        menu.classList.add('background');
        for (let i = 0; i < text_menu.length; i++) {
            text_menu[i].classList.add('text_green');
        }
        logo.classList.add('logo_green');
      }
      else{
        menu.classList.remove('background');
        for (let i = 0; i < text_menu.length; i++) {
            text_menu[i].classList.remove('text_green');
        }
        logo.classList.remove('logo_green');
      }


      //cuộn chuột phần content_2

      if(this.window.pageYOffset > local_ct2 -500)
      {
          col_sm_6[0].classList.add('privous_in');
          col_sm_6[3].classList.add('next_in');
      }
      else{
        col_sm_6[0].classList.remove('privous_in');
        col_sm_6[3].classList.remove('next_in');
      }
   })
   
 

 var pos = 0,
     body = document.body, //body cua web
     html = document.documentElement; // html web
// funcion về hàm scroll có tham số là vi trí muốn scroll đến
  function scroll_to_down (location_body_html){
    var id = setInterval(scroll_content,10);

    function scroll_content(){
      if(pos >= location_body_html){
        clearInterval(id);
      }
      else{
        pos = pos + 15;
        body.scrollTop = pos ; 
        html.scrollTop = pos ; 
        
      }
    }
  }
  function scroll_to_top (location_body_html,to){ 
    pos = location_body_html;// to : tới đâu
    var id = setInterval(scroll_content,10);

    function scroll_content(){
      if(pos <= to){
        clearInterval(id);
        pos = location_body_html;
      }
      else{
        pos = pos - 15;
        body.scrollTop = pos ; 
        html.scrollTop = pos ; 
        
      }
    }
  }
  buttom_info.addEventListener('click',function(){ 
      scroll_to_top(local_ct1,200);
  })
  profile_menu.addEventListener('click',function(){   
    scroll_to_down(local_ct1);
    if(pos<=local_ct1){
      pos = 0;
    }
  })


},false)
