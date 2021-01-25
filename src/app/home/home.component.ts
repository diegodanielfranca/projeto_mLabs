import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  public ngOnInit(): void { }

  public goToScheduling(): void {
    this.router.navigate(['/schedule']);
  }
}
