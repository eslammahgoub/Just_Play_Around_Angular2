import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { DatepickerModule } from '../src/datepicker.module';
import { MaterialModule } from '@angular/material';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    DatepickerModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
