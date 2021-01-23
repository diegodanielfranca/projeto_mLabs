import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    public name: string;
    public showEmojiPicker = false;
    public message = '';

    imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;

    public sets = [
        'native',
        'google',
        'twitter',
        'facebook',
        'emojione',
        'apple',
        'messenger'
      ]
      set = 'google';

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    public ngOnInit(): void { }

    public schedule(): void {
        this.router.navigate(['/schedule']);
    }

    toggleEmojiPicker() {
        console.log(this.showEmojiPicker);
            this.showEmojiPicker = !this.showEmojiPicker;
      }
    
      onFocus() {
        console.log('focus');
        this.showEmojiPicker = false;
      }
    
      addEmoji(event) {
        const { message } = this;
        console.log(message);
        console.log(`${event.emoji.native}`)
        const text = `${message}${event.emoji.native}`;
    
        this.message = text;
        this.showEmojiPicker = false;
      }
}
