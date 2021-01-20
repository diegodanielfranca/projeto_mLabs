import { SocialMidiasModel } from './../../shared/models/social-midias.model';
import { ScheduleModule } from '../../shared/models/schedule.model';
import { SchedulesService } from './../../services/schedules.service';
import { Component, OnInit } from '@angular/core';
import { SocialMidiaService } from 'src/app/services/social-midias.service';

@Component({
    selector: 'app-social-medias',
    templateUrl: './social-medias.component.html',
    styleUrls: ['./social-medias.component.css']
})

export class SocialMediasComponent implements OnInit {

    public socialMidias: SocialMidiasModel;

    constructor(private socialMidiasService: SocialMidiaService) { }

    public ngOnInit() {
        this.getSocialMidias();
    }


    private getSocialMidias(): void {
        this.socialMidiasService.getSocialMidias()
            .subscribe((_resp: any) => {
                const _temp = JSON.parse(_resp);
                this.socialMidias = _temp.data;
                console.log(this.socialMidias);
            });
    }

    public onClickIcon(value: any): void{
        console.log(value);
    }

}