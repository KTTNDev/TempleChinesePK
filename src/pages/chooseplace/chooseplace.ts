import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailplacePage } from '../detailplace/detailplace';
import { PlaceItem } from '../../models/add-place/add-place.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

/**
 * Generated class for the ChooseplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chooseplace',
  templateUrl: 'chooseplace.html',
})
export class ChooseplacePage {
  DetailplacePage=DetailplacePage;
  placeListRef$: FirebaseListObservable<PlaceItem[]>
  placeList1Ref$: FirebaseListObservable<PlaceItem[]>
  placeList3Ref$: FirebaseListObservable<PlaceItem[]>

  LoginPage=LoginPage;
  destination:string;
  start:string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private launchNavigator: LaunchNavigator,
    private database: AngularFireDatabase) {

      this.placeListRef$ = this.database.list('placelist');
      this.placeList1Ref$ = this.database.list('placelist1');
      this.placeList3Ref$ = this.database.list('placelist3');

      this.start = "";
      this.destination = "";
  
    
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
  navme(address){
    this.launchNavigator.navigate(address);
    console.log(address);
  }


}
