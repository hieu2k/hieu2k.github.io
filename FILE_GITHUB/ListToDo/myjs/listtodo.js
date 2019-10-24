"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Work_1 = require("./Work");
const listWork_1 = require("./listWork");
const clickMainRight_1 = require("./clickMainRight");
let listWorkObj = new listWork_1.listWork();
let works = [];
let showFormAddWork = document.querySelector(".header .parents .items .buttonAddWorkParent .form_add");
let bgBlack = document.querySelector(".header .parents .items .buttonAddWorkParent .bg");
let buttonAddWork = document.querySelector(".header .parents .items .buttonAddWorkChild");
//get date-time
var MyDefine;
(function (MyDefine) {
    MyDefine.id = 0;
    MyDefine.date_time = new Date();
    MyDefine.day = MyDefine.date_time.getDate();
    MyDefine.month = MyDefine.date_time.getMonth() + 1;
    MyDefine.year = MyDefine.date_time.getFullYear();
    MyDefine.second = MyDefine.date_time.getSeconds();
    MyDefine.Minutes = MyDefine.date_time.getMinutes();
    MyDefine.hours = MyDefine.date_time.getHours();
    MyDefine.id_when_click = 0;
})(MyDefine || (MyDefine = {}));
var MyDefineClassHTML;
(function (MyDefineClassHTML) {
    MyDefineClassHTML.ListWork = ".list_work";
    MyDefineClassHTML.Fooder = ".fooder";
    MyDefineClassHTML.NameClassEnterHTML = ".listToDo .addWork .Write-work";
    MyDefineClassHTML.NameClassBottonHTML = ".listToDo .addWork .button-add";
    MyDefineClassHTML.NameClassBottonHTML1 = ".buttonAddWorkParent .form_add .button-add";
    MyDefineClassHTML.NameClassEnterHTML1 = ".buttonAddWorkParent .form_add .Write-work";
})(MyDefineClassHTML || (MyDefineClassHTML = {}));
//click buttton Quick add task
function clickButtonQuickAddTask() {
    buttonAddWork.addEventListener("click", function () {
        showFormAddWork.classList.toggle("show");
        bgBlack.classList.toggle("show");
    });
    bgBlack.addEventListener("click", function () {
        showFormAddWork.classList.remove("show");
        bgBlack.classList.remove("show");
    });
}
// efect basic of botton
function effectHeader() {
    showFormAddWork.classList.remove("show");
    bgBlack.classList.remove("show");
}
// add your work
function clickButtonAddWork(name, name1) {
    // let button_Add = document.querySelector('.addWork .button-add');
    // button_Add.onclick = function(){
    //     console.log($(".Write-work").val());
    // }
    $(name).click(function () {
        newWork(name1);
        $(".Write-work").val("");
        effectHeader();
    });
}
// add your work
function addWork(name, id, day, month, year) {
    let work = new Work_1.Work(name, id, day, month, year);
    listWorkObj.addWork(work);
}
// Create new work
function newWork(name) {
    MyDefine.id++;
    let word = $(name).val().toString();
    if (word === "" || word === " " || word === "   " || word === "    " || word === "     ") {
        return;
    }
    addWork(word, MyDefine.id, MyDefine.day, MyDefine.month, MyDefine.year);
    showWork();
}
//show in html
function showWork() {
    $(MyDefineClassHTML.ListWork).html(listWorkObj.showWorkInHTML());
    $(MyDefineClassHTML.Fooder).html(listWorkObj.showFooderInHTML());
}
//listen key enter
function enterAddWork(name) {
    let inputWork = document.querySelector(name);
    inputWork.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            newWork(name);
            $(".Write-work").val("");
            effectHeader();
        }
    });
}
//check box of work
function clickCheckboxOfWork() {
    $(document).on("click", "#checkBox", function () {
        let checkBox = document.getElementById('checkBox');
        let nameWork = document.querySelectorAll('.name_work');
        MyDefine.id_when_click = parseInt($(this).data('id'));
        let work = listWorkObj.getWorkById(MyDefine.id_when_click);
        let position = listWorkObj.getPositionWork(work);
        nameWork[position].classList.toggle("decoration");
    });
}
//detete 1 work
function deleteWork(id) {
    let work = listWorkObj.getWorkById(id);
    listWorkObj.deleteWork(work);
    showWork();
}
// click button delete work
function FinishWork() {
    $(document).on("click", ".finsh_Work .btn", function () {
        let checkBox = document.querySelectorAll('.checkBox');
        for (let i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked === true) {
                let id = parseInt(checkBox[i].getAttribute("data-id"));
                deleteWork(id);
            }
        }
    });
}
$(document).ready(function () {
    showWork();
    clickButtonAddWork(MyDefineClassHTML.NameClassBottonHTML, MyDefineClassHTML.NameClassEnterHTML);
    enterAddWork(MyDefineClassHTML.NameClassEnterHTML);
    clickButtonAddWork(MyDefineClassHTML.NameClassBottonHTML1, MyDefineClassHTML.NameClassEnterHTML1);
    enterAddWork(MyDefineClassHTML.NameClassEnterHTML1);
    clickCheckboxOfWork();
    clickButtonQuickAddTask();
    FinishWork();
    clickMainRight_1.clickMainRight();
});
