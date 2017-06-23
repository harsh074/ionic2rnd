import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalytics2 } from "../../app/app.component";

/**
 * Generated class for the PerformanceMetrics page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-performance-metrics',
  templateUrl: 'performance-metrics.html',
})
export class PerformanceMetrics {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    GoogleAnalytics2.setTrackView('Performance Metrics');
    console.log('ionViewDidLoad PerformanceMetrics');
  }

}
