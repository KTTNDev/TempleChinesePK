import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddplacePage } from '../addplace/addplace';
import { EditplacePage } from '../editplace/editplace';
import { PlaceItem } from '../../models/add-place/add-place.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { LoginPage } from '../login/login';
import { DetailplacePage } from '../detailplace/detailplace';

/**
 * Generated class for the ShowlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-showlist',
  templateUrl: 'showlist.html',
})
export class ShowlistPage {
  placeListRef$: FirebaseListObservable<PlaceItem[]>
  placeList1Ref$: FirebaseListObservable<PlaceItem[]>

  LoginPage=LoginPage;
  DetailplacePage=DetailplacePage;


  
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private database: AngularFireDatabase ,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  
      this.placeListRef$ = this.database.list('placelist');
      this.placeList1Ref$ = this.database.list('placelist1');
    
  }

  selectPlaceItem(placeItem: PlaceItem){
    this.actionSheetCtrl.create({
      title: `${placeItem.name}`,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
          this.navCtrl.push(EditplacePage,
             { placeItemId: placeItem.$key });
  
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
          this.placeListRef$.remove(placeItem.$key);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log("The User Selected")
      }
      }
      ]
    }).present();
  }
  
  viewPlace(id, name, floor, detail, url){
    //console.log(id, name,floor,detail, url);
    this.navCtrl.push(DetailplacePage,{
      key : id,
      name : name,
      floor : floor,
      detail : detail,
      url : url
    });
 
   }
 
  navigateToAddTestlist() {
    this.navCtrl.push(AddplacePage)
  }

}
