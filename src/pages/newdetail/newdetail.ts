import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';
import { PlaceItem } from '../../models/add-place/add-place.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map'
/**
 * Generated class for the NewdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newdetail',
  templateUrl: 'newdetail.html',
})
export class NewdetailPage {
  item: PlaceItem;
  images = ['T3.JPEG', 'T4.JPEG'];
  selectedItem: any;
  @ViewChild(Slides) slides: Slides;


  placeList: FirebaseListObservable<PlaceItem[]>
  placelist = {
    id: '',
    name: '',
    floor: '',
    detail: '',
    url: '',
    url1: ''
    
  }


  constructor(
    
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    public geolocation: Geolocation
  ) {
      this.placeList = database.list('/placelist');
      this.placelist.id = this.navParams.get('key')
      this.placelist.name = this.navParams.get('name')
      this.placelist.floor = this.navParams.get('floor')
      this.placelist.detail = this.navParams.get('detail')
      this.placelist.url = this.navParams.get('url')
      this.placelist.url1 = this.navParams.get('url1')

    }



  ionViewWillLoad(){
    this.item = this.navParams.get('item');
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is',currentIndex);
  }

}
