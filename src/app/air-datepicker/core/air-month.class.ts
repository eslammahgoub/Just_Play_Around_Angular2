/**
 * AirMonth
 * @constructor
 * @description [normalizes month/year]
 */

export class AirMonth {
    month: number;
    year: number;

    constructor (month, year) {
        if (month > 11) {
            year++;
            month = 0;
        } else if (month < 0) {
            year--;
            month = 11;
        }

        this.month = month;
        this.year = year;
    }
}