/**
 * AirCalendar
 * @constructor
 * @description []
 */

import { AirDay } from './air-day.class';
import { AirWeekend } from './air-weekend.class';
import { AirMonth } from './air-month.class';

export class AirCalendar {
    daysInMonth: Array<number> = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    airDays: Array<AirDay>;
    year: number;
    month: number;
    date: number;
    hour: number;
    minute: number;

    constructor (date: Date = new Date) {
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.date = date.getDate();
        this.hour = date.getHours();
        this.minute = date.getMinutes();
        this.updateCalendar()
    }

    next () {
        this.setMonth(this.month + 1);
        this.updateCalendar();
    }

    previous () {
        this.setMonth(this.month - 1);
        this.updateCalendar();
    }

    updateCalendar () {
        this.airDays = [];
        let daysInMonth = this.getDaysInMonth(this.month);
        let date = new Date;
        let firstDayOfMonth = ((new Date(Date.parse(`${this.year}/${this.month + 1}/1`))).getDay() || 7) - 1; // making 0 == monday
        let weekend = new AirWeekend(firstDayOfMonth);

        if (firstDayOfMonth/* is not monday (0) */) {
            let daysInLastMonth = this.getDaysInMonth(this.month - 1);
            for (let date = daysInLastMonth - firstDayOfMonth; date < daysInLastMonth; date++) {
                this.airDays.push(new AirDay(date, weekend.progress(), true));
            }
        }

        for (let date = 1; date <= daysInMonth; date++) {
            this.airDays.push(new AirDay(date, weekend.progress()));
        }

        if (this.date > daysInMonth) {
            this.date = daysInMonth; // select the maximum available this month instead
        }
        let selectedDate = firstDayOfMonth + this.date - 1;
        this.airDays[selectedDate].selected = true;
        if (date.getMonth() == this.month) {
            // set the current date if it's the current month, regardless of year for now
            this.airDays[firstDayOfMonth + date.getDate() - 1].current = true;
        }

        let daysSoFar = firstDayOfMonth + daysInMonth;
        for (let date = 1; date <= (daysSoFar > 35 ? 42 : 35) - daysSoFar; date++) {
            this.airDays.push(new AirDay(date, weekend.progress(), true));
        }
    }

    selectDate (index: number) {
        this.date = this.airDays[index].date;

        // might be a day from the previous/next month
        if (index < 7 && this.date > 20) {
            this.previous();
        } else if (index > 20 && this.date < 8) {
            this.next();
        } else {
            // no need to update the whole calendar here
            for (let day of this.airDays) {
                if (day.selected) {
                    day.selected = false;
                }
            }

            this.airDays[index].selected = true;
        }
    }

    setMonth (month) {
        let airMonth: AirMonth = new AirMonth(month, this.year);
        this.month = airMonth.month;
        this.year = airMonth.year;
    }

    getDaysInMonth (month) {
        let airMonth: AirMonth = new AirMonth(month, this.year);
        if(airMonth.month == 1 && ((airMonth.year % 4 == 0) && (airMonth.year % 100 != 0)) || (airMonth.year % 400 == 0)) {
            return 29;
        }

        return this.daysInMonth[airMonth.month];
    }
}