import { Component, OnInit, Input, Renderer, Output,ViewChild, HostListener, EventEmitter, trigger, state, style, transition, animate, ElementRef, AfterViewInit } from '@angular/core';
import { AirCalendar } from './core/air-calendar.class';
import { AirOptions } from './core/air-options.class';
import { AirLanguage, LANGUAGES } from './core/languages.class';
import { DatePicker } from './core/date-picker.class';

@Component({
  selector: 'air-datepicker',
  templateUrl: './air-datepicker.component.html',
  styleUrls: ['./air-datepicker.component.scss'],
  animations: [
    trigger('airState', [
      state('inactive', style({
        display: 'none',
        marginTop: 20,
        height: 0,
        opacity: 0
      })),
      state('active',   style({
        display: 'block',
        height: '*',
        marginTop: 5,
        opacity: 1
      })),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ])
  ]
})
export class AirDatepickerComponent implements OnInit, AfterViewInit {
    public datePickerC;
    @ViewChild('inline') inline;
    @Input() airOptions: AirOptions;
    @Input() airDate: Date;
    @Input() noneMaterial: boolean;
    @Input() material: boolean;

    @Output() airChange = new EventEmitter<Date>();

    airLanguage: AirLanguage;
    airCalendar: AirCalendar;

    inputFocus: boolean;
    state: string = 'inactive';
    private nativeElement;

    constructor(private renderer : Renderer, private element: ElementRef) {
      this.nativeElement = element.nativeElement;
    }

    ngOnInit () {
        if (!this.airOptions) {
            this.airOptions = new AirOptions;
        }
        this.airLanguage = LANGUAGES(this.airOptions.language);
        this.airCalendar = new AirCalendar(this.airDate);
    }

    ngAfterViewInit () {
      this.datePickerC = new DatePicker(this.renderer,  this.inline.nativeElement);
    }

    setDate (index?: number) {
        this.doBlur();
        // if (this.airCalendar.airDays[index]) {
        //     this.airCalendar.selectDate(index);
        // }

        // this.airDate.setTime(Date.parse(`${this.airCalendar.year}/${this.airCalendar.month + 1}/${this.airCalendar.date} ${this.airCalendar.hour}:${this.airCalendar.minute}`));

        // this.airChange.emit(this.airDate);
    }

    doFocus() {
      this.inputFocus = true;
      this.state = 'active';
      this.datePickerC.setActive();
    }

    doBlur() {
      // this.inputFocus = false;
      // this.state = 'inactive';
      this.datePickerC.setDeactivate();
    }
}
