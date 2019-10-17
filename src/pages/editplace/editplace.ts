import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaceItem } from '../../models/add-place/add-place.model';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

/**
 * Generated class for the EditplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editplace',
  templateUrl: 'editplace.html',
})
export class EditplacePage {

  placeItemRef$: FirebaseObjectObservable<PlaceItem>
  placeItem = {} as PlaceItem;

  constructor(
    private database: AngularFireDatabase ,
    public navCtrl: NavController, 
    public navParams: NavParams) {
 
    const placeItemId = this.navParams.get('placeItemId');

    //log test
    //console.log(placeItemId);

    this.placeItemRef$ = this.database.object(`placelist/${placeItemId}`);
 
    this.placeItemRef$.subscribe(placeItem => this.placeItem = placeItem);
  }

  editPlaceItem(placeItem: PlaceItem) {
    this.placeItemRef$.update(placeItem);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditplacePage');
  }

}
