import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostStatus } from 'src/app/shared/models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class SchedulesStatusService {

  public _url: string;
  public _response: any = `{
      "data": [
        {
          "id": 1,
          "name": "Agendado",
          "color": "#2F80ED"
        },
        {
          "id": 2,
          "name": "Postado",
          "color": "#27AE60"
        },
        {
          "id": 3,
          "name": "Não aprovado",
          "color": "#F2C94C"
        },
        {
          "id": 4,
          "name": "Postado com ressalvas",
          "color": "#EB5757"
        }
      ]
    }`;

  constructor(public httpClient: HttpClient) { }

  public getSchedules(): Observable<Array<PostStatus>> {
    // return new Observable((observable) => {
    //     this.httpClient.get(this._url)
    //         .subscribe((_res: any) => {
    //             _res = JSON.parse(this._response);
    //             observable.next();
    //             observable.complete();
    //         }, (error: HttpErrorResponse) => {
    //           observable.error('Erro ao buscar posts agendados. Tente novamente mais tarde.');
    //         });
    // });
    return of(JSON.parse(this._response));
  }


}
