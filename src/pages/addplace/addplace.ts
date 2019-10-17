import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaceItem } from '../../models/add-place/add-place.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the AddplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addplace',
  templateUrl: 'addplace.html',
})
export class AddplacePage {

  placeItem = {} as PlaceItem;
  title = 'JavaSampleApproach';
  description = 'Angular4-Firebase Demo';
  placeItemRef$: FirebaseListObservable<PlaceItem[]>
  constructor(private database: AngularFireDatabase ,public navCtrl: NavController, public navParams: NavParams) {
    this.placeItemRef$ = this.database.list('placelist');
  }

  addplace(placeItem: PlaceItem){
    this.placeItemRef$.push({
      name: this.placeItem.name,
      floor: Number(this.placeItem.floor),
      detail: this.placeItem.detail,
      latlng: this.placeItem.latlng,
      url: this.placeItem.url,
      
    });

    this.placeItem ={} as PlaceItem;

    this.navCtrl.pop();
  }

}
