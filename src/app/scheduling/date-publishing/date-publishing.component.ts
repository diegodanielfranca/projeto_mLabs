import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-publishing',
    templateUrl: './date-publishing.component.html',
    styleUrls: ['./date-publishing.component.css']
})

export class DatePublishingComponent implements OnInit {

    public dateSent: any = '';
    public todaysdate: any;

    constructor() { }

    public ngOnInit(): void { }

    public click(dateSent) {
        console.log(dateSent);
    }

}
