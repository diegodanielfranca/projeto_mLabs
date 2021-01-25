import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class SchedulesService {

    public _url = 'http://localhost:3000/schedules';

    constructor(public httpClient: HttpClient) { }

    public getSchedules(): Observable<any> {
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
