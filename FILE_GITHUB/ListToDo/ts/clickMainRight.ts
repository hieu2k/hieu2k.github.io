export function clickMainRight(){
    let buttonAddProjct = document.querySelector(".buttonAddProject .addProject");
    let Projects = document.querySelector(".Projects");
    let buttonToday = document.querySelector(".buttonToday p.ToDayWork");
    let buttonNextDay = document.querySelector(".buttonNextDay p.NextDayWork");
    let barMenu = document.querySelector(".barMenu");
    let contentLeft = document.querySelector(".contentLeft");
    let btnCloseBarMenu = document.querySelector(".btnClose");
    
    buttonAddProjct.addEventListener("click",function(){
        buttonNextDay.classList.remove("show");
        buttonToday.classList.remove("show");
        Projects.classList.toggle("show");
        buttonAddProjct.classList.toggle("show");
    })
    buttonNextDay.addEventListener("click",function(){
        buttonToday.classList.remove("show");
        buttonNextDay.classList.toggle("show");
    })
    buttonToday.addEventListener("click",function(){
        buttonNextDay.classList.remove("show");
        buttonToday.classList.toggle("show");
    })
    barMenu.addEventListener("click",function(){
        contentLeft.classList.toggle("show");
    })
    btnCloseBarMenu.addEventListener("click",function(){
        contentLeft.classList.remove("show");
    })
}