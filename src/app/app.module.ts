import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { AuthService } from '../providers/auth-service';
import { HttpModule } from '@angular/http';
import {FormUploadComponent} from './upload/form-upload/form-upload.component';
import {UploadFileService} from './upload/upload-file.service';
import {environment} from '../environments/environment';
 
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddplacePage } from '../pages/addplace/addplace';
import { EditplacePage } from '../pages/editplace/editplace';
import { PlacelistPage } from '../pages/placelist/placelist';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';
import { ChooseplacePage } from '../pages/chooseplace/chooseplace';
import { DetailplacePage } from '../pages/detailplace/detailplace';
import { ShowlistPage } from '../pages/showlist/showlist';
import { NewdetailPage } from '../pages/newdetail/newdetail';
import { AddpinPage } from '../pages/addpin/addpin';
import { MapsfirebasePage } from '../pages/mapsfirebase/mapsfirebase';
import { Listshrine1Page } from '../pages/listshrine1/listshrine1';
import { Listshrine2Page } from '../pages/listshrine2/listshrine2';
import { Listshrine3Page } from '../pages/listshrine3/listshrine3';
import { HistoryshrinePage } from '../pages/historyshrine/historyshrine';
import { RulePage } from '../pages/rule/rule';
import { TraditionPage } from '../pages/tradition/tradition';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    FormUploadComponent,
    MyApp,
    HomePage,
    AddplacePage,
    EditplacePage,
    PlacelistPage,
    LoginPage,
    MapPage,
    AddpinPage,
    ChooseplacePage,
    TabsPage,
    DetailplacePage,
    ShowlistPage,
    MapsfirebasePage,
    Listshrine1Page,
    Listshrine2Page,
    Listshrine3Page,
    HistoryshrinePage,
    RulePage,
    TraditionPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddplacePage,
    EditplacePage,
    PlacelistPage,
    LoginPage,
    MapPage,
    AddpinPage,
    TabsPage,
    ChooseplacePage,
    DetailplacePage,
    ShowlistPage,
    MapsfirebasePage,
    Listshrine1Page,
    Listshrine2Page,
    Listshrine3Page,
    HistoryshrinePage,
    RulePage,
    TraditionPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen, 
    Geolocation,
    LaunchNavigator,
    GoogleMaps,
    AuthService,
    UploadFileService,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
