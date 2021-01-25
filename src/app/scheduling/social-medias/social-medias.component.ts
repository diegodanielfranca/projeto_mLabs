import { SocialMidiasModel } from './../../shared/models/social-midias.model';
import { Component, OnInit } from '@angular/core';
import { SocialMidiaService } from 'src/app/services/social-midias.service';

@Component({
    selector: 'app-social-medias',
    templateUrl: './social-medias.component.html',
    styleUrls: ['./social-medias.component.css']
})

export class SocialMediasComponent implements OnInit {

    public socialMidias: SocialMidiasModel;
    public clicked: boolean = false;

    constructor(private socialMidiasService: SocialMidiaService) { }

    public ngOnInit() {
        // console.log(this.clicked);
        this.getSocialMidias();
    }

    private getSocialMidias(): void {
        this.socialMidiasService.getSocialMidias()
            .subscribe((_resp: any) => {
                this.socialMidias = _resp.data;
            });
    }

    public onClickIcon(selectedSocialMidia: SocialMidiasModel): void {
        selectedSocialMidia.clicked = !selectedSocialMidia.clicked ? true : false;
    }

}