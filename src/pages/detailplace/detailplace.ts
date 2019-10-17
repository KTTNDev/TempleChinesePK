import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlaceItem } from '../../models/add-place/add-place.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map'

declare var google;

/**
 * Generated class for the DetailplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailplace',
  templateUrl: 'detailplace.html',
})
export class DetailplacePage {
  images = ['T3.JPEG', 'T4.JPEG'];
  selectedItem: any;
  @ViewChild('map') mapRef:ElementRef;
  
  map : any;
  item: PlaceItem;
  placeList: FirebaseListObservable<PlaceItem[]>
  placelist = {
    id: '',
    name: '',
    floor: '',
    detail: '',
    url: '',
    url1:''
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



  ionViewDidLoad(){
    this.showMap();
  }
  showMap() {
    //Location 
    let latLng = new google.maps.LatLng(7.9099251,98.3872832);

 
    // map
    let options = {
      center: latLng,
      zoom: 17,
      streetViewControl:false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

  }

  ionViewWillLoad(){
    this.item = this.navParams.get('item');
  }


}
