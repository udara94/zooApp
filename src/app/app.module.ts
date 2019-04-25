import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {IonicImageViewerModule} from 'ionic-img-viewer';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AnimalPage} from '../pages/animal/animal';
import {CafePage} from '../pages/cafe/cafe';
import {EventsPage} from '../pages/events/events';
import {GalleryPage} from '../pages/gallery/gallery';
import {MapPage} from '../pages/map/map';
import {SharePage} from '../pages/share/share';
import {MammalsPage} from '../pages/mammals/mammals';
import {ReptilesPage} from '../pages/reptiles/reptiles';
import {BirdsPage} from '../pages/birds/birds';
import { ViewMammalPage} from '../pages/view-mammal/view-mammal';
import {ViewBirdsPage} from '../pages/view-birds/view-birds';
import {ViewReptilePage} from '../pages/view-reptile/view-reptile';
import {LionPage} from '../pages/lion/lion';
import {PandaPage} from '../pages/panda/panda';
import {BearPage} from '../pages/bear/bear';
import {ElephantPage} from '../pages/elephant/elephant';
import {GiraffePage} from '../pages/giraffe/giraffe';
import {ParrotPage} from '../pages/parrot/parrot';
import {OwlPage} from '../pages/owl/owl';
import {PenguinPage} from '../pages/penguin/penguin';
import {ToucanPage} from '../pages/toucan/toucan';
import {GoosePage} from '../pages/goose/goose';
import {TurtlePage} from '../pages/turtle/turtle';
import {CrocodilePage} from '../pages/crocodile/crocodile';
import {PythonPage} from '../pages/python/python';
import {TortoisePage} from '../pages/tortoise/tortoise';
import {SnakePage} from '../pages/snake/snake';
import {PhotoPage} from '../pages/photo/photo';
import {ShopPage} from '../pages/shop/shop';
import {SouvernierPage} from '../pages/souvernier/souvernier';
import {DolphinePage} from '../pages/dolphine/dolphine';
import {BirdShowPage} from '../pages/bird-show/bird-show';
import {SnakeShowPage} from '../pages/snake-show/snake-show';
import {BabyCarePage} from '../pages/baby-care/baby-care';
import {CrocodileAdventurePage} from '../pages/crocodile-adventure/crocodile-adventure';
import {MyPlanPage} from '../pages/my-plan/my-plan';

import {HttpModule} from "@angular/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MammalProvider } from '../providers/mammal/mammal';
import { BirdProvider } from '../providers/bird/bird';
import { ReptileProvider } from '../providers/reptile/reptile';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {Shake} from '@ionic-native/shake';
import {HideheaderDirective} from '../directives/hideheader/hideheader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
   AnimalPage,
    CafePage,
    EventsPage,
    GalleryPage,
    MapPage,
    SharePage,
    MammalsPage,
    ReptilesPage,
    BirdsPage,
    ViewMammalPage,
    ViewBirdsPage,
    ViewReptilePage,
    LionPage,
    PandaPage,
    BearPage,
    ElephantPage,
    GiraffePage,
    ParrotPage,
    OwlPage,
    PenguinPage,
    ToucanPage,
    GoosePage,
    TurtlePage,
    CrocodilePage,
    PythonPage,
    TortoisePage,
    SnakePage,
    PhotoPage,
    ShopPage,
    SouvernierPage,
    DolphinePage,
    BirdShowPage,
    SnakeShowPage,
    BabyCarePage,
    CrocodileAdventurePage,
    HideheaderDirective,
    MyPlanPage
   
  ],
  imports: [
    IonicImageViewerModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
 AnimalPage,
    CafePage,
    EventsPage,
    GalleryPage,
    MapPage,
    SharePage,
    MammalsPage,
    ReptilesPage,
    BirdsPage,
    ViewMammalPage,
    ViewBirdsPage,
    ViewReptilePage,
    LionPage,
    PandaPage,
    BearPage,
    ElephantPage,
    GiraffePage,
    ParrotPage,
    OwlPage,
    PenguinPage,
    ToucanPage,
    GoosePage,
    TurtlePage,
    CrocodilePage,
    PythonPage,
    TortoisePage,
    SnakePage,
    PhotoPage,
    ShopPage,
    SouvernierPage,
    DolphinePage,
    BirdShowPage,
    SnakeShowPage,
    BabyCarePage,
    CrocodileAdventurePage,
    MyPlanPage
   
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MammalProvider,
    BirdProvider,
    ReptileProvider,
    Shake
  ]
})
export class AppModule {}
