import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    public publishDate: string = '01/01/2021';
    public publishTime: string = '8h';
    public midias: Array<any> = ['', ''];

    public canProceed(): boolean {
        console.log(1 + 1);
        return true;
    }


}