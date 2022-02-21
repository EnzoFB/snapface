import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {
      this.title = 'Archibald';
      this.description = 'My Best Friend';
      this.createdDate = new Date();
      this.snaps = 6;
      this.imageUrl = 'https://media-cdn.tripadvisor.com/media/photo-s/1a/02/50/bb/troupial-the-national.jpg';
      this.buttonText = 'Oh Snap!';
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') { 
      this.faceSnap.snaps++;
      this.buttonText = 'Oups unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
