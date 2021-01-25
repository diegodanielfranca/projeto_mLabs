import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostStatus } from 'src/app/shared/models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulesStatusService {

  public _url = 'http://localhost:3000/schedules-status';

  constructor(public httpClient: HttpClient) { }

  public getSocialMidiasSchedules(): Observable<Array<PostStatus>> {
    return new Observable((observable) => {
        this.httpClient.get(this._url)
            .subscribe((_res: any) => {
                observable.next(_res);
                observable.complete();
            }, (error: HttpErrorResponse) => {
              observable.error('Erro ao buscar posts agendados. Tente novamente mais tarde.');
            });
    });
  }


}
