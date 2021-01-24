import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../shared/global/global.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
    selector: 'app-schedule',
    templateUrl: './scheduling.component.html',
    styleUrls: ['./scheduling.component.css']
})

export class SchedulingComponent implements OnInit {

    public canProceed: boolean;

    constructor(
        public globalService: GlobalService,
        private router: Router,
        public dialog: MatDialog
    ) { }

    public ngOnInit(): void {
        this.canProceed = this.globalService.canProceed();
    }

    public goToListSchedule() {
        this.router.navigate(['/list-scheduling']);
    }

    public openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '872px',
            height: '419px',
            backdropClass: 'dialog'
        });

        dialogRef.afterClosed().subscribe(result => {
            this.goToListSchedule();
        });
    }

}
