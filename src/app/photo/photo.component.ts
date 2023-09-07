import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {

  public photo: any = [];

  constructor(private _photoService: PhotoService) {
    _photoService.getPhoto().subscribe(
      (data: any) => {
        this.photo = data.data.memes;
      },
      (err: any) => {
        alert("Internal server error")
      }
    )
  }
}
