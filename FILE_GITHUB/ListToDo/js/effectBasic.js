$(document).ready(function (){
    $(".addWork input.Write-work").on("focus",function(){
        $(this).addClass("focus");
    })
    $(".addWork input.Write-work").on("blur",function(){
        if ($(this).val() == "") {
            $(this).removeClass("focus");
        }
    })
    //javascript
    // let showFormAddWork = document.querySelector(".header .parents .items .buttonAddWorkParent .form_add");
    // let buttonAddWork = document.querySelector(".header .parents .items .buttonAddWorkChild");
    // let bgBlack = document.querySelector(".header .parents .items .buttonAddWorkParent .bg");
    // buttonAddWork.addEventListener("click",function(){
    //     showFormAddWork.classList.toggle("show");
    //     bgBlack.classList.toggle("show");
    // })
    // bgBlack.addEventListener("click",function(){
    //     showFormAddWork.classList.remove("show");
    //     bgBlack.classList.remove("show");
    // })
})