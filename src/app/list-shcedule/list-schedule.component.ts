import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../services/schedules.service';
import { ScheduleModule } from '../shared/models/schedule.model';

import * as moment from 'moment';
// const _moment = moment;


@Component({
  selector: 'app-list-schedule',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.css']
})
export class ListScheduleComponent implements OnInit {

  public schedule: Array<ScheduleModule>;

  constructor(private schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this.getSchedule();
  }

  private getSchedule(): void {
    this.schedulesService.getSchedules()
      .subscribe((_res: any) => {
        this.schedule = _res.data;
        this.formatDate(_res.data);
        console.log(this.schedule);
      });
  }

  private formatDate(res: any): void {
    const field = res[0].publication_date;

    console.log(field.moment().format('YYYY/MM/DD, hh.mm'));
          // ._moment().format('YYYY/MM/DD, hh.mm');
  }

}
