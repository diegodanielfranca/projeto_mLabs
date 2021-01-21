import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class SocialMidiaService {

    private _url = 'https://github.com/mlabssoftware/mlabs-teste/blob/master/front-end/db/';
    private _response: any = `{
        "data": [
            {
              "id": 1,
              "name": "Facebook",
              "icon": "facebook-f",
              "status": "disabled"
            },
            {
              "id": 2,
              "name": "Linkedin",
              "icon": "linkedin-in",
              "status": "enabled"
            },
            {
              "id": 3,
              "name": "Instagram",
              "icon": "instagram",
              "status": "enabled"
            },
            {
              "id": 4,
              "name": "Youtube",
              "icon": "youtube",
              "status": "disabled"
            },
            {
              "id": 5,
              "name": "Pinterest",
              "icon": "pinterest-p",
              "status": "disabled"
            },
            {
              "id": 6,
              "name": "Twitter",
              "icon": "twitter",
              "status": "disabled"
            }
          ]
    }`;

    constructor(private httpClient: HttpClient) { }

    public getSocialMidias(): Observable<any> {
        // return new Observable((observable) => {
        //     this.httpClient.get(this._url)
        //         .subscribe((_resp: any) => {
        //             observable.next();
        //             observable.complete();
        //             observable.error
        //         }, (error: HttpErrorResponse) => {
        //             observable.error('Erro ao trazer Midias Sociais, Recarrega a página.');
        //         });
        // });
        return of(this._response);
    }
}