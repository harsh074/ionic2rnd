import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { GoogleAnalytics2 } from "../../app/app.component";
/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {
  long;
  lat;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private geolocation: Geolocation,private locationAccuracy: LocationAccuracy) {
  }

  ionViewDidLoad() {
    GoogleAnalytics2.setTrackView('Home');
    console.log('ionViewDidLoad Home');
  }

  myLocation(){
    debugger
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {console.log('Request successful');this.getlatLong()},
      error => console.log('Error requesting location permissions', error)
    );
  }

  getlatLong(){
    debugger
    this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    this.lat = resp.coords.latitude;
    this.long = resp.coords.longitude;  
    console.log("latitude" + resp.coords.latitude);
    console.log("longitude" + resp.coords.longitude);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
