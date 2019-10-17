import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

/**
 * Generated class for the MapsfirebasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapsfirebase',
  templateUrl: 'mapsfirebase.html',
})
export class MapsfirebasePage { 
  destination:string;
  start:string;

  constructor(
      public navCtrl: NavController,
      private launchNavigator: LaunchNavigator
  ) {
    this.start = "";
    this.destination = "Westminster, London, UK";
  }

  navigate(){
    let options: LaunchNavigatorOptions = {
      start: this.start
    };

    this.launchNavigator.navigate(this.destination, options)
        .then(
            success => alert('Launched navigator'),
            error => alert('Error launching navigator: ' + error)
    );
  }
}
