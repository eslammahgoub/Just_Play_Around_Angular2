/**
 * AirDay
 * @constructor
 * @description []
 */

export class AirDay {
    date: number;
    weekend: boolean;
    other: boolean;
    current: boolean;
    selected: boolean;

    constructor (date: number, weekend: boolean = false, other: boolean = false, current: boolean = false, selected: boolean = false) {
        this.date = date;
        this.weekend = weekend;
        this.other = other;
        this.current = current;
        this.selected = selected;
    }
}