import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleAnalytics2 } from "../../app/app.component";
/**
 * Generated class for the HealthTracker page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-health-tracker',
  templateUrl: 'health-tracker.html',
})
export class HealthTracker {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    GoogleAnalytics2.setTrackView('Health Tracker');
    console.log('ionViewDidLoad HealthTracker');
  }

}
