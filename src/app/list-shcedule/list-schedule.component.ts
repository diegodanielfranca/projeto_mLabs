import { PostStatus } from './../shared/models/schedule.model';
import { SchedulesStatusService } from './../services/schedules-status/schedules-status.service';
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

  constructor(
    private schedulesService: SchedulesService,
    private schedulesStatusService: SchedulesStatusService,
  ) { }

  ngOnInit(): void {
    this.getSchedule();
  }

  private getSchedule(): void {
    this.schedulesService.getSchedules()
      .subscribe((_res: any) => {
        this.schedule = _res.data;
        this.formatDate();
        this.getStatus();
      });
  }

  private formatDate(): void {
    const _array = this.schedule;
    let count = 0

    _array.forEach((_field: ScheduleModule) => {
      let date;

      date = moment(_field.publication_date).format('DD/MM/YYYY HH:mm');
      this.schedule[count].publication_date = date;
      count++;
    });
  }

  private getStatus(): void {
    this.schedulesStatusService.getSocialMidiasSchedules()
      .subscribe((_res: any) => {
        this.filterStatus(_res.data);
      });
  }

  private filterStatus(_statusArray: Array<PostStatus>): void {
    const _schedule = this.schedule;

    _schedule.forEach((_el: ScheduleModule) => {
      _el.social_network_key.forEach((_statusPost: any) => {
        _statusArray.forEach((_elStatus: PostStatus) => {
          if (_statusPost === _elStatus.id) {
            if (_el.status === undefined) {
              _el.status = new Array<any>();
            }
            _elStatus.socialName = this.changeSocialMidiaIcon(_statusPost)
            _el.status.push(_elStatus);
          }
        });
      });
    });
    console.log(_schedule);
  }

  private changeSocialMidiaIcon(statusNumber: number): string {
    let _socialMidiaName;
    this.schedule.forEach((_el: ScheduleModule) => {
      switch (statusNumber) {
        case 0:
          _socialMidiaName = 'twitter';
        case 1:
          _socialMidiaName = 'facebook-f"';
          break;
        case 2:
          _socialMidiaName = 'linkedin-in';
          break;
        case 3:
          _socialMidiaName = 'instagram';
        default:
          break;
      }
    });
    return _socialMidiaName;
  }

}
