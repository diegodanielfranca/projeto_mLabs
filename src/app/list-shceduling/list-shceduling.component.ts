import { Component, OnInit } from '@angular/core';
import { SchedulesService } from '../services/schedules.service';
import { ScheduleModule } from '../shared/models/schedule.model';

@Component({
  selector: 'app-list-shceduling',
  templateUrl: './list-shceduling.component.html',
  styleUrls: ['./list-shceduling.component.css']
})
export class ListShcedulingComponent implements OnInit {

  public schedule: Array<ScheduleModule>;

  constructor(private schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this.getSchedule();
  }

  private getSchedule(): void {
    this.schedulesService.getSchedules()
      .subscribe((_res: any) => {
        this.schedule = _res;
        console.log(this.schedule);
      });
  }

}
