import { Work } from "./Work";
import { listWork } from "./listWork";
import { clickMainRight } from "./clickMainRight";
let listWorkObj = new listWork();
let works:Work[] = [];
let showFormAddWork = document.querySelector(".header .parents .items .buttonAddWorkParent .form_add");
let bgBlack = document.querySelector(".header .parents .items .buttonAddWorkParent .bg");
let buttonAddWork = document.querySelector(".header .parents .items .buttonAddWorkChild");

//get date-time

namespace MyDefine{
    export let id:number = 0;
    export const date_time = new Date();
    export const day:number = date_time.getDate();
    export const month:number = date_time.getMonth()+1;
    export const year:number = date_time.getFullYear();
    export const second:number = date_time.getSeconds ();
    export const Minutes:number = date_time.getMinutes ();
    export const hours:number = date_time.getHours ();
    export let id_when_click:number = 0;
}
namespace MyDefineClassHTML{
    export let ListWork:string = ".list_work";
    export let Fooder:string = ".fooder";
    export let NameClassEnterHTML = ".listToDo .addWork .Write-work";
    export let NameClassBottonHTML = ".listToDo .addWork .button-add";
    export let NameClassBottonHTML1 = ".buttonAddWorkParent .form_add .button-add";
    export let NameClassEnterHTML1 = ".buttonAddWorkParent .form_add .Write-work";
    
}
//click buttton Quick add task
function clickButtonQuickAddTask(){
    buttonAddWork.addEventListener("click",function(){
        showFormAddWork.classList.toggle("show");
        bgBlack.classList.toggle("show");
        
    })
    bgBlack.addEventListener("click",function(){
        showFormAddWork.classList.remove("show");
        bgBlack.classList.remove("show");
    })
}
// efect basic of botton
function effectHeader(){
    showFormAddWork.classList.remove("show");
    bgBlack.classList.remove("show");
}
// add your work
function clickButtonAddWork(name:string,name1:string){
    // let button_Add = document.querySelector('.addWork .button-add');

    // button_Add.onclick = function(){
    //     console.log($(".Write-work").val());
    // }
    $(name).click(function(){
        newWork(name1);
        $(".Write-work").val("");
        effectHeader();
    })
}
// add your work
function addWork(name:string,id:number,day:number,month:number,year:number){
    let work = new Work(name,id,day,month,year);
    listWorkObj.addWork(work);
}
// Create new work
function newWork(name:string){
    MyDefine.id++;
    let word:string = $(name).val().toString();
    if (word===""||word===" "||word==="   "||word==="    "||word==="     ") {
        return;
    }   
    addWork(word,MyDefine.id,MyDefine.day,MyDefine.month,MyDefine.year);
    showWork();
}
//show in html
function showWork(){
    $(MyDefineClassHTML.ListWork).html(listWorkObj.showWorkInHTML());
    $(MyDefineClassHTML.Fooder).html(listWorkObj.showFooderInHTML());
}
//listen key enter
function enterAddWork(name:string){
    let inputWork = document.querySelector(name);
    inputWork.addEventListener("keyup",function(event){
        if (event.keyCode === 13) {
            event.preventDefault();
            newWork(name);
            $(".Write-work").val("");
            effectHeader();
        }
    })
}
//check box of work
function clickCheckboxOfWork(){  
    $(document).on("click","#checkBox",function(){
        let checkBox = document.getElementById('checkBox');
        let nameWork = document.querySelectorAll('.name_work');
        MyDefine.id_when_click = parseInt($(this).data('id')); 
        let work:Work = listWorkObj.getWorkById(MyDefine.id_when_click);
        let position = listWorkObj.getPositionWork(work);
        nameWork[position].classList.toggle("decoration");
    })
}

//detete 1 work
function deleteWork(id:number){
    let work:Work = listWorkObj.getWorkById(id);
    listWorkObj.deleteWork(work);
    showWork();
}
// click button delete work
function FinishWork(){
    $(document).on("click",".finsh_Work .btn",function(){
        let checkBox = document.querySelectorAll('.checkBox');
        for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked === true) {
                let id:number = parseInt(checkBox[i].getAttribute("data-id"));
                deleteWork(id);
            }
        }
    })
}
$(document).ready(function (){
    showWork();
    clickButtonAddWork(MyDefineClassHTML.NameClassBottonHTML,MyDefineClassHTML.NameClassEnterHTML);
    enterAddWork(MyDefineClassHTML.NameClassEnterHTML);
    clickButtonAddWork(MyDefineClassHTML.NameClassBottonHTML1,MyDefineClassHTML.NameClassEnterHTML1);
    enterAddWork(MyDefineClassHTML.NameClassEnterHTML1);
    clickCheckboxOfWork();
    clickButtonQuickAddTask();
    FinishWork();
    clickMainRight();
})