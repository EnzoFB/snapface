import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit { 

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit() {
      this.title = 'Archibald';
      this.description = 'My Best Friend';
      this.createdDate = new Date();
      this.snaps = 6;
      this.imageUrl = 'https://media-cdn.tripadvisor.com/media/photo-s/1a/02/50/bb/troupial-the-national.jpg';
  }

}
