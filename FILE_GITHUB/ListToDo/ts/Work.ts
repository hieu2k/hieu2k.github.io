export class Work {
    private _name:string;
    private _id:number;
    private _day:number;
    private _month:number;
    private _year:number;
    constructor(name:string,id:number=1,day:number,month:number,year:number) {
        this._name = name;
        this._id = id;
        this._day = day;
        this._month = month;
        this._year = year;
    }

    
    public get name() : string {
        return this._name;
    }
    public set name(v : string) {
        this._name = v;
    }
    public get id() : number {
        return this._id;
    }
    public set id(v : number) {
        this._id = v;
    }
    public get day() : number {
        return this._day;
    }
    public set day(v : number) {
        this._day = v;
    }
    public get month() : number {
        return this._month;
    }
    public set month(v : number) {
        this._month = v;
    }
    public get year() : number {
        return this._year;
    }
    public set year(v : number) {
        this._year = v;
    }
   
}