import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable()
export class SocialMidiaService {

    private _url = 'http://localhost:3000/social-networks';

    constructor(private httpClient: HttpClient) { }

    public getSocialMidias(): Observable<any> {
        return new Observable((observable) => {
            this.httpClient.get(this._url)
                .subscribe((_resp: any) => {
                    observable.next(_resp);
                    observable.complete();
                }, (error: HttpErrorResponse) => {
                    observable.error('Erro ao trazer Midias Sociais, Recarrega a página.');
                });
        });
        // return of(this._response);
    }
}