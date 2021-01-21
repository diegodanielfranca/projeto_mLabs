import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-text',
  templateUrl: './post-text.component.html',
  styleUrls: ['./post-text.component.css']
})
export class PostTextComponent implements OnInit {

  public showEmojiPicker = false;
  public message = '';

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

  ngOnInit(): void {
  }

  // public addEmoji(event: any): void {
  //   console.log(event);
  // }

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
    // this.showEmojiPicker = false;
  }

}
