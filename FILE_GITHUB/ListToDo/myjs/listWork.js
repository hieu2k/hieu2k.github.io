"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class listWork {
    constructor() {
        this.Works = [];
        this.storageDoneWork = [];
        this._totalWork = 0;
    }
    getWorkById(id) {
        for (let i = 0; i < this.Works.length; i++) {
            if (this.Works[i].id === id) {
                return this.Works[i];
            }
        }
    }
    getWorks() {
        return this.Works;
    }
    addWork(work) {
        this.Works[this.Works.length] = work;
        this.storageDoneWork[this.storageDoneWork.length] = work;
        this._totalWork++;
    }
    //get position
    getPositionWork(work) {
        let total = this.Works.length;
        for (let i = 0; i < total; i++) {
            if (this.Works[i].id === work.id) {
                return i;
            }
        }
        return -1;
    }
    deleteWork(work) {
        let position = this.getPositionWork(work);
        if (position > -1) {
            this._totalWork--;
            this.Works.splice(position, 1);
        }
    }
    deleteAllWork() {
    }
    showWorkInHTML() {
        let InHTML = ``;
        let total = this.Works.length;
        for (let i = 0; i < total; i++) {
            InHTML += `
                <div class="_1work">
                    <input type="checkbox" data-id="${this.Works[i].id}" class="checkBox" name="" id="checkBox">
                    <span class="checkmark"></span>
                    <p class="name_work">${this.Works[i].name}</p>
                </div>    
            `;
        }
        return InHTML;
    }
    showFooderInHTML() {
        let InHTML = ``;
        InHTML = `
            <p class="all_Work">All work of today is--<span> ${this._totalWork} </span>--work</p>
            <div class="finsh_Work">
                <button class="btn btn-info"><p>Finish work</p></button>
            </div>
        `;
        return InHTML;
    }
    showWorkFinishInHTML() {
        return "";
    }
    get totalWork() {
        return this._totalWork;
    }
    set totalWork(v) {
        this._totalWork = v;
    }
}
exports.listWork = listWork;
