import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-text',
  templateUrl: './post-text.component.html',
  styleUrls: ['./post-text.component.css']
})
export class PostTextComponent implements OnInit {

  public showEmojiPicker = false;
  public postText = '';

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
  constructor() { }

  ngOnInit(): void { }

  public toggleEmojiPicker() {
        this.showEmojiPicker = !this.showEmojiPicker;
  }

  public onFocus() {
    this.showEmojiPicker = false;
  }

  public addEmoji(event) { 
    setTimeout(() => {
      const _emoji = event.emoji.native;
      this.postText = this.postText.concat(_emoji);
      this.showEmojiPicker = false;
    }, 1000);
  }

}
