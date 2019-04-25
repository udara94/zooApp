import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {timer} from 'rxjs/observable/timer';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {MapPage} from '../pages/map/map';
import {AnimalPage} from '../pages/animal/animal';
import {GalleryPage} from '../pages/gallery/gallery';
import {EventsPage} from '../pages/events/events';
import {CafePage} from '../pages/cafe/cafe';
import {SharePage} from '../pages/share/share';
import {ShopPage} from '../pages/shop/shop';
import {MyPlanPage} from '../pages/my-plan/my-plan';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  showSplash=true;
  pages: Array<{title: string, component: any}>;
  page2:any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Map', component: MapPage },
      { title: 'Animals', component: AnimalPage },
      { title: 'Gallery', component: GalleryPage },
      { title: 'Cafe & others', component: ShopPage },
      { title: 'Events', component: EventsPage },
    
    ];
    this.page2={
      mapage: MapPage,
      animal:AnimalPage,
      gallery: GalleryPage ,
      cafe:ShopPage,
      event:EventsPage,
      myPlan:MyPlanPage 
    }



  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
