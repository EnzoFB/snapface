import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}