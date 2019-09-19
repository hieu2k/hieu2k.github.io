document.addEventListener('DOMContentLoaded',function(){
    var menu = document.querySelector('.menu')
    window.addEventListener('scroll',function(){
        if (window.pageYOffset >100){
            menu.classList.add('background');
        }
        else{
            menu.classList.remove('background');
        }
        
    })
},false)