import { Work } from "./Work";

export class listWork {
    private Works : Work [] = [];
    private storageDoneWork:Work [] = [];
    private _totalWork:number = 0;
    constructor() {
        
    }
    public getWorkById(id:number):Work{
        for (let i = 0; i < this.Works.length; i++) {
            if (this.Works[i].id === id) {
                return this.Works[i];
            }
        }
       
    }
    public getWorks():Work[]{
        return this.Works;
    }
    public addWork(work:Work):void{
        this.Works[this.Works.length] = work;
        this.storageDoneWork[this.storageDoneWork.length] = work;
        this._totalWork ++;
    }
    //get position
    public getPositionWork(work:Work):number{
        let total = this.Works.length;
        for (let i = 0; i < total; i++) {
            if (this.Works[i].id === work.id) {
                return i;
            }
        }
        return -1;
    }
    public deleteWork(work:Work):void{
        let position:number = this.getPositionWork(work);
        if (position > -1) {
            this._totalWork --;
            this.Works.splice(position,1);
        }
    }
    public deleteAllWork():void{

    }
    public showWorkInHTML():string{
        let InHTML:string = ``;
        let total = this.Works.length;
        for (let i = 0; i < total; i++) {
            InHTML += `
                <div class="_1work">
                    <input type="checkbox" data-id="${this.Works[i].id}" class="checkBox" name="" id="checkBox">
                    <span class="checkmark"></span>
                    <p class="name_work">${this.Works[i].name}</p>
                </div>    
            `
        }
        
        return InHTML;
    }
    public showFooderInHTML():string{
        let InHTML:string = ``;
        InHTML = `
            <p class="all_Work">All work of today is--<span> ${this._totalWork} </span>--work</p>
            <div class="finsh_Work">
                <button class="btn btn-info"><p>Finish work</p></button>
            </div>
        `
        return InHTML;
    }
    public showWorkFinishInHTML():string{
        return "";
    }
    
    public get totalWork() : number {
        return this._totalWork;
    }
    
    public set totalWork(v : number) {
        this._totalWork = v;
    }
    
}