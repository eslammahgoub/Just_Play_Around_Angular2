/**
 * DatePicker
 * @constructor
 * @description []
 */

import { Renderer, ElementRef} from '@angular/core';
import { DatePickerBody } from './date-picker-body.class';

export class DatePicker {
    VERSION = '1.0.0';
    pluginName = 'datepicker';
    renderer: Renderer;
    outerElement: Renderer;
    pointerElement: Renderer;
    navActionElement: Renderer;
    navElement: Renderer;
    navSvgElement: Renderer;
    contentElement: Renderer;
    navPathElement: Renderer;
    classes: string = '';
    inline: boolean = false;
    language: string = 'en';
    startDate: Date = new Date;
    firstDay: string = '';
    weekends = [6, 0];
    dateFormat: string = '';
    altField: string = '';
    altFieldDateFormat: string = '@';
    toggleSelected: boolean = true;
    keyboardNav: boolean = true;

    position: string = 'bottom left';
    offset: number = 12;

    view: string = 'days';
    minView: string = 'days';

    showOtherMonths: boolean = true;
    selectOtherMonths: boolean = true;
    moveToOtherMonthsOnSelect: boolean = true;

    showOtherYears: boolean = true;
    selectOtherYears: boolean = true;
    moveToOtherYearsOnSelect: boolean = true;

    minDate: string = '';
    maxDate: string ='';
    disableNavWhenOutOfRange: boolean = true;

    multipleDates: boolean | number = false; // Boolean or Number
    multipleDatesSeparator: string = ',';
    range: boolean = false;

    todayButton: boolean = false;
    clearButton: boolean = false;

    showEvent: string = 'focus';
    autoClose: boolean = false;

    // navigation
    monthsField: string = 'monthsShort';
    prevHtml: Renderer;
    nextHtml: Renderer;
    navTitle: string;
    navTitles: any =  {
        days: 'MM, <i>yyyy</i>',
        months: 'yyyy',
        years: 'yyyy1 - yyyy2'
    };

    // timepicker
    timepicker: boolean = false;
    onlyTimepicker: boolean = false;
    dateTimeSeparator: string = ' ';
    timeFormat: string = '';
    minHours: number = 0;
    maxHours: number = 24;
    minMinutes: number = 0;
    maxMinutes: number = 59;
    hoursStep: number = 1;
    minutesStep: number = 1;

    // events
    onSelect: string = '';
    onShow: string = '';
    onHide: string = '';
    onChangeMonth: string = '';
    onChangeYear: string = '';
    onChangeDecade: string = '';
    onChangeView: string = '';
    onRenderCell: string = '';
    hotKeys: any = {
        'ctrlRight': [17, 39],
        'ctrlUp': [17, 38],
        'ctrlLeft': [17, 37],
        'ctrlDown': [17, 40],
        'shiftRight': [16, 39],
        'shiftUp': [16, 38],
        'shiftLeft': [16, 37],
        'shiftDown': [16, 40],
        'altUp': [18, 38],
        'altRight': [18, 39],
        'altLeft': [18, 37],
        'altDown': [18, 40],
        'ctrlShiftUp': [16, 17, 38]
    };


    constructor(renderer: Renderer, nativeElement: ElementRef) {
        this.renderer = renderer;
        this.init(renderer, nativeElement);
    }

    init(renderer: Renderer, nativeElement) {
      this.outerElement = renderer.createElement(nativeElement, "div");
      renderer.setElementClass(this.outerElement, 'datepicker', true);
      renderer.setElementClass(this.outerElement, '-bottom-left-', true);
      renderer.setElementClass(this.outerElement, '-from-bottom-', true);
      renderer.setElementClass(this.outerElement, 'active', true);
      this.pointerElement = renderer.createElement(this.outerElement, "i");
      renderer.setElementClass(this.pointerElement, 'datepicker--pointer', true);
      this.navElement = renderer.createElement(this.outerElement, "nav");
      renderer.setElementClass(this.navElement, 'datepicker--nav', true);
      this.createNavElement(renderer, this.navElement);
      this.contentElement = renderer.createElement(this.outerElement, "div");
      renderer.setElementClass(this.contentElement, 'datepicker--content', true);
      let days = new DatePickerBody(renderer, this.contentElement);
      days.setActive();
    }

    setActive() {
        this.renderer.setElementClass(this.outerElement, 'active', true);
    }

    setDeactivate() {
        this.renderer.setElementClass(this.outerElement, 'active', false);
    }

    createPrevElement(renderer: Renderer, element) {
        this.prevHtml = renderer.createElement(element, "div");
        renderer.setElementAttribute(this.prevHtml, "width", "32");
        renderer.setElementAttribute(this.prevHtml, "height", "32");
        renderer.setElementClass(this.prevHtml, "material-icons", true); 
        renderer.createText(this.prevHtml, "keyboard_arrow_left");
    }

    createNextElement(renderer: Renderer, element) {
        this.nextHtml = renderer.createElement(element, "div");
        renderer.setElementAttribute(this.nextHtml, "width", "32");
        renderer.setElementAttribute(this.nextHtml, "height", "32");
        renderer.setElementClass(this.nextHtml, "material-icons", true );
        renderer.createText(this.nextHtml, "keyboard_arrow_right");
    }

    createNavElement(renderer: Renderer, element) {
      let navActionElement1 = renderer.createElement(element, "div");
      renderer.setElementClass(navActionElement1, "datepicker--nav-action", true);
      renderer.setElementAttribute(navActionElement1, "data-action", "prev");
      this.createPrevElement(renderer, navActionElement1);
      this.createTitleElement(renderer, element);
      let navActionElement2 = renderer.createElement(element, "div");
      renderer.setElementClass(navActionElement2, "datepicker--nav-action", true);
      renderer.setElementAttribute(navActionElement2, "data-action", "next");
      this.createNextElement(renderer, navActionElement2);
    }

    setNavTitle(title?: string) {
        if(!title) {
            return new Date().toDateString();
        } else {
            return title;
        }
    }

    createTitleElement(renderer: Renderer, element) {
        let navTitleElement = renderer.createElement(element, "div");
        renderer.setElementClass(navTitleElement, "datepicker--nav-title", true);
        let title: string = this.setNavTitle();
        renderer.createText(navTitleElement, title);
    }

    createOuterElement(renderer: Renderer, element) {
        // let outerElement = renderer.createElement(element, "div");
        // renderer.setElementClass(outerElement, "datepicker");
    }
}