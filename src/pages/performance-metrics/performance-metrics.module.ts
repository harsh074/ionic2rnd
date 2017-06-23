import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerformanceMetrics } from './performance-metrics';

@NgModule({
  declarations: [
    PerformanceMetrics,
  ],
  imports: [
    IonicPageModule.forChild(PerformanceMetrics),
  ],
  exports: [
    PerformanceMetrics
  ]
})
export class PerformanceMetricsModule {}
