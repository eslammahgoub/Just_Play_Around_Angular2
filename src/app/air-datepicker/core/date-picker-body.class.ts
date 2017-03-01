/**
 * DatePickerBody
 * @constructor
 * @description []
 */

import { Renderer } from '@angular/core';

export class DatePickerBody {
    VERSION = '1.0.0';
    renderer: Renderer;
    outerElement;
    weekEnds = [6,0];
    mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    currentMonthNumber: string;
    currentMonthString: string;
    currentMonthDays: number;
    currentYear: string;

    constructor(renderer: Renderer, nativeElement: any) {
        this.renderer = renderer;
        this.init(renderer, nativeElement);
        this.getDaysHtml(new Date());
    }

    init(renderer: Renderer, nativeElement) {
      this.outerElement = renderer.createElement(nativeElement, "div");
      renderer.setElementClass(this.outerElement, 'datepicker--days', true);
      renderer.setElementClass(this.outerElement, 'datepicker--body', true);
      this.daysNames(renderer, this.outerElement);
      this.daysCells(renderer, this.outerElement);
    }

    setActive() {
        this.renderer.setElementClass(this.outerElement, 'active', true);
    }

    setDeactivate() {
        this.renderer.setElementClass(this.outerElement, 'active', false);
    }

    daysNames(renderer: Renderer, element) {
        let daysElement = renderer.createElement(element, "div");
        renderer.setElementClass(daysElement, 'datepicker--days-names', true);
        this.daysWeekend(renderer, daysElement);
    }

    daysWeekend(renderer: Renderer, element) {
        this.weekDays.forEach((value, inx)=>{
            let daysElement = renderer.createElement(element, "div");
            renderer.setElementClass(daysElement, "datepicker--day-name", true);
            this.weekEnds.forEach((valueIndex,numIndex)=>{
                if(valueIndex === inx) {
                    renderer.setElementClass(daysElement, "-weekend-", true);
                }
            });
            renderer.createText(daysElement, value);
        });
    }

    daysCells(renderer: Renderer, element) {
        let daysCellElement = renderer.createElement(element, "div");
        renderer.setElementClass(daysCellElement, "datepicker--cells", true);
        renderer.setElementClass(daysCellElement, 'datepicker--cells-days', true);
        this.createDayElement(renderer, daysCellElement);
    }

    createDayElement(renderer: Renderer, element) {
        let date = new Date();
        this.getCurrentMonth(date);
        this.getCurrentFullYear(date);
        let month = new Date().getMonth();
        let year  = new Date().getFullYear();
        let numberDays = this.getDaysInMonth(month, year);
        let numbers = [...numberDays];
        numbers.forEach((value,index) => {
            let dayElement = renderer.createElement(element, "div");
            renderer.setElementClass(dayElement, "datepicker--cell", true);
            renderer.setElementClass(dayElement, "datepicker--cell-day", true);
            // renderer.setElementClass(dayElement, "-weekend-", true);
            // renderer.setElementClass(dayElement, "-other-month-", true);
            renderer.setElementAttribute(dayElement, "data-date", (index + 1).toString());
            renderer.setElementAttribute(dayElement, "data-month", this.currentMonthNumber);
            renderer.setElementAttribute(dayElement, "data-year", this.currentYear);
            renderer.createText(dayElement, (index + 1).toString());
        });
    }

    setWeekend(index?) {
        if(index) {
            this.weekEnds = index;
        }
    }

    getDaysInMonth(month, year) {
        let date = new Date(year, month, 1);
        let days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    /**
     * Calculates days number to render. Generates days html and returns it.
     * @param {object} date - Date object
     * @returns {string}
     * @private
     */
    getDaysHtml(date) {
        let totalMonthDays = this.getDaysCount(date),
            firstMonthDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
            lastMonthDay = new Date(date.getFullYear(), date.getMonth(), totalMonthDays).getDay();
        this.currentMonthDays = totalMonthDays;
        console.log(totalMonthDays);
    }

    getCurrentMonth(date) {
        let currentDate = date;
        this.currentMonthNumber = currentDate.getMonth() + 1;
        this.mL.forEach((value,index)=>{
            if(index === Number(this.currentMonthNumber) - 1) {
                this.currentMonthString = value;
            }
        });
    }

    getCurrentFullYear(date) {
        let currentDate = date;
        this.currentYear = date.getFullYear();
    }

    getDaysCount(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
}