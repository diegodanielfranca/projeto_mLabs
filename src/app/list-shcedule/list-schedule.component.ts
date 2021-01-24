import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../services/schedules.service';
import { ScheduleModule } from '../shared/models/schedule.model';

import * as moment_ from 'moment';
const moment = moment_;


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
        // console.log(this.schedule);
      });
  }

  private formatDate(res: any): void {
    const _array = this.schedule;
    let count = 0

    _array.forEach((_field: ScheduleModule) => {
      let date;

      date = moment(_field.publication_date).format('DD-MM-YYYY HH:mm');
      this.schedule[count].publication_date = date;
      count++;
    });

    const field = res[0].publication_date;

    console.log(this.schedule);
    // console.log(moment(field).format('YYYY-MM-DD HH:mm'));
  }

}
