import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapService } from '../../../core/services/face-snaps-service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const snapId = Number(this.route.snapshot.params['id'])

    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number) {
    // if (this.buttonText === 'Oh Snap!') { 
    //   this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap')
    //   this.buttonText = 'Oups unSnap!';
    // } else {
    //   this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap')
    //   this.buttonText = 'Oh Snap!';
    // }

    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.buttonText = 'Oops, unsnap!')
      );
    } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.buttonText = 'Oh Snap!')
      );
    }
  }
}
