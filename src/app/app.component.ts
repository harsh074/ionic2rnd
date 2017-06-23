import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

export class GoogleAnalytics2 {
  static ga;
  static setGAId(){
    
  }
  static setTrackView(page:string){
    //GoogleAnalytics2.ga.startTrackerWithId("UA-53167063-2");
    GoogleAnalytics2.ga.startTrackerWithId('UA-53167063-2')
    .then(() => {
      console.log('Google analytics is ready now');
          GoogleAnalytics2.ga.trackView(page);
      // Tracker is ready
      // You can now track pages or set additional information such as AppVersion or UserId
    })
    .catch(e => console.log('Error starting GoogleAnalytics', e));
  }
 
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'Home';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public ga: GoogleAnalytics) {
    GoogleAnalytics2.ga=ga;
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'Home' },
      { title: 'Health Tracker', component: 'HealthTracker' },
      { title: 'Survey', component: 'Surveys' },
      { title: 'Performance Matrix', component: 'PerformanceMetrics' }
    ];

  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.platform.registerBackButtonAction(() => {
        debugger
        console.log(this.nav);
        if(this.nav.canGoBack()){
          console.log("no back");
        }
        else{
          console.log("back");
          this.nav.pop();
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

