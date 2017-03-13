import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <material-datepicker
        [(date)]="date"
        (onSelect)="onSelect($event)"
        dateFormat="YYYY.MM.DD"
        [rangeEnd]="testRangeDate"
        multi="true"
        multipleDates="2"
      ></material-datepicker>

      <button md-raised-button (click)="setToday()" color="primary">today</button>
      <button md-raised-button (click)="clearDate()" color="primary">reset</button>
    `
})
export class AppComponent {
  date: Date;
  disabled: boolean;
  @Input() testRangeDate: Date;

  constructor() {
    // this.testRangeDate = new Date();
  }

  formatDate(date: Date): string {
    return date.toLocaleString();
  }

  onSelect(date: Date) {
    console.log("onSelect: ", date);
  }
  clearDate() {
    this.date = null;
  }

  setToday() {
    this.date = new Date();
  }
}
