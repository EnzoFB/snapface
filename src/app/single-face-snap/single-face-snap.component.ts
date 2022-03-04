import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps-service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const snapId = Number(this.route.snapshot.params['id'])

    this.buttonText = 'Oh Snap!';
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId)
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') { 
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
      this.buttonText = 'Oups unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
      this.buttonText = 'Oh Snap!';
    }
  }
}
