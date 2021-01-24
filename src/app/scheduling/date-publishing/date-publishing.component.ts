import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

export const MY_FORMATS = {
    parse: {
      dateInput: 'LL',
    },
    display: {
      dateInput: 'LL',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };

@Component({
    selector: 'app-date-publishing',
    templateUrl: './date-publishing.component.html',
    styleUrls: ['./date-publishing.component.css'],
    // providers: [
    // ]
})

export class DatePublishingComponent implements OnInit {

    public selectedDate = new FormControl();
    public todaysdate: any;

    constructor() { }

    public ngOnInit(): void { }

    public click(dateSent) {
        console.log(dateSent);
    }

}
