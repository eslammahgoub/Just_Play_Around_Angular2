/**
 * Calendar
 * @constructor
 * @description []
 */

import { Day } from './day.class';
import { Weekend } from './weekend.class';
import { Month } from './month.class';

export class Calendar {
    daysInMonth: Array<number> = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    aDays: Array<Day>;
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
        this.aDays = [];
        let daysInMonth = this.getDaysInMonth(this.month);
        let date = new Date();
        let firstDayOfMonth = ((new Date(Date.parse(`${this.year}/${this.month + 1}/1`))).getDay() || 7) - 1; // making 0 == monday
        let weekend = new Weekend(firstDayOfMonth);

        if (firstDayOfMonth/* is not monday (0) */) {
            let daysInLastMonth = this.getDaysInMonth(this.month - 1);
            for (let date = daysInLastMonth - firstDayOfMonth; date <= daysInLastMonth; date++) {
                this.aDays.push(new Day(date, this.year, this.month, weekend.progress(), true));
            }
        }

        for (let date = 1; date <= daysInMonth; date++) {
            this.aDays.push(new Day(date, this.year, this.month, weekend.progress()));
        }

        if (this.date > daysInMonth) {
            this.date = daysInMonth; // select the maximum available this month instead
        }
        let selectedDate = firstDayOfMonth + this.date - 1;
        this.aDays[selectedDate].selected = true;
        if (date.getMonth() == this.month) {
            // set the current date if it's the current month, regardless of year for now
            this.aDays[firstDayOfMonth + date.getDate() - 1].current = true;
        }

        let daysSoFar = firstDayOfMonth + daysInMonth;
        for (let date = 1; date < (daysSoFar > 35 ? 42 : 35) - daysSoFar; date++) {
            this.aDays.push(new Day(date, this.year, this.month, weekend.progress(), true));
        }
    }

    selectDate (index: number) {
        this.date = this.aDays[index].date;

        // might be a day from the previous/next month
        if (index < 7 && this.date > 20) {
            this.previous();
        } else if (index > 20 && this.date < 8) {
            this.next();
        } else {
            // no need to update the whole calendar here
            for (let day of this.aDays) {
                if (day.selected) {
                    day.selected = false;
                }
            }

            this.aDays[index].selected = true;
        }
    }

    setMonth (month) {
        let aMonth: Month = new Month(month, this.year);
        this.month = aMonth.month;
        this.year = aMonth.year;
    }

    getDaysInMonth (month) {
        let aMonth: Month = new Month(month, this.year);
        if(aMonth.month == 1 && ((aMonth.year % 4 == 0) && (aMonth.year % 100 != 0)) || (aMonth.year % 400 == 0)) {
            return 29;
        }

        return this.daysInMonth[aMonth.month];
    }
}