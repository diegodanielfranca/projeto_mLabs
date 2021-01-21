import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/global/global.service';

@Component({
    selector: 'app-schedule',
    templateUrl: './scheduling.component.html',
    styleUrls: ['./scheduling.component.css']
})

export class SchedulingComponent implements OnInit {

    public canProceed: boolean;

    constructor(
        public globalService: GlobalService,
        private router: Router) { }

    public ngOnInit(): void { 
        this.canProceed = this.globalService.canProceed();
    }

    public goToListSchedule() { 
        this.router.navigate(['/list-scheduling']);
    }

}
