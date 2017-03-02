import { Component, OnInit, Input, Renderer, Output,ViewChild, HostListener, EventEmitter, trigger, state, style, transition, animate, ElementRef, AfterViewInit } from '@angular/core';
import { Calendar } from './core/calendar.class';
import { Options } from './core/options.class';
import { ALanguage, LANGUAGES } from './core/languages.class';
import { DatePicker } from './core/date-picker.class';

@Component({
  selector: 'a-datepicker',
  templateUrl: './a-datepicker.component.html',
  styleUrls: ['./a-datepicker.component.scss'],
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
export class ADatepickerComponent implements OnInit, AfterViewInit {
    public datePickerC;
    @ViewChild('inline') inline;
    @Input() aOptions: Options;
    @Input() aDate: Date;
    @Input() noneMaterial: boolean;
    @Input() material: boolean;

    @Output() airChange = new EventEmitter<Date>();

    aLanguage: ALanguage;
    aCalendar: Calendar;

    inputFocus: boolean;
    state: string = 'inactive';
    private nativeElement;

    constructor(private renderer : Renderer, private element: ElementRef) {
      this.nativeElement = element.nativeElement;
    }

    ngOnInit () {
        if (!this.aOptions) {
            this.aOptions = new Options;
        }
        this.aLanguage = LANGUAGES(this.aOptions.language);
        this.aCalendar = new Calendar(this.aDate);
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
