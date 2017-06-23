import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthTracker } from './health-tracker';

@NgModule({
  declarations: [
    HealthTracker,
  ],
  imports: [
    IonicPageModule.forChild(HealthTracker),
  ],
  exports: [
    HealthTracker
  ]
})
export class HealthTrackerModule {}
