import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.css']
})
export class ImgUploaderComponent implements OnInit {

  public fileToUpload: File = null;

  constructor() { }

  public ngOnInit(): void { }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    console.log('carregou essa merda');
    console.log(this.fileToUpload);
  }

}
