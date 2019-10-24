"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Work {
    constructor(name, id = 1, day, month, year) {
        this._name = name;
        this._id = id;
        this._day = day;
        this._month = month;
        this._year = year;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    get day() {
        return this._day;
    }
    set day(v) {
        this._day = v;
    }
    get month() {
        return this._month;
    }
    set month(v) {
        this._month = v;
    }
    get year() {
        return this._year;
    }
    set year(v) {
        this._year = v;
    }
}
exports.Work = Work;
