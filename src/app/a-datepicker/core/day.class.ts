/**
 * Day
 * @constructor
 * @description []
 */

export class Day {
    date: number;
    year: number;
    month: number;
    weekend: boolean;
    other: boolean;
    current: boolean;
    selected: boolean;

    constructor (date: number, year: number, month: number, weekend: boolean = false, other: boolean = false, current: boolean = false, selected: boolean = false) {
        this.date = date;
        this.year = year;
        this.month = month;
        this.weekend = weekend;
        this.other = other;
        this.current = current;
        this.selected = selected;
    }
}