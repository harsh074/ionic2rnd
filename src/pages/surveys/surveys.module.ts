import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Surveys } from './surveys';

@NgModule({
  declarations: [
    Surveys,
  ],
  imports: [
    IonicPageModule.forChild(Surveys),
  ],
  exports: [
    Surveys
  ]
})
export class SurveysModule {}
