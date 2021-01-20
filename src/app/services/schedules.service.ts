import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class SchedulesService {

    public _url: string;
    public _response: any = `{
        "data": [
            {
              "id": 1,
              "social_network_key": [2, 3],
              "media": "https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              "text": "Texto do post",
              "publication_date": "2020-09-10T15:59:23.922Z",
              "status_key": 1 
            },
            {
              "id": 2,
              "social_network_key": [2],
              "media": "https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              "text": "Texto do post",
              "publication_date": "2020-09-08T15:59:23.922Z",
              "status_key": 3 
            }
          ]
    }`;

    constructor(public httpClient: HttpClient) { }

    public getSchedules(): Observable<any> {
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
        return of(JSON.parse(this._response.data));
    }
}
