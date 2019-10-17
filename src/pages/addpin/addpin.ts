import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ViewChild , ElementRef } from '@angular/core'
import { PlaceItem } from '../../models/add-place/add-place.model';

import { AngularFireDatabase , FirebaseListObservable } from 'angularfire2/database'
import { Observable } from 'rxjs'

declare let google:any

/**
 * Generated class for the AddpinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addpin',
  templateUrl: 'addpin.html',
})
export class AddpinPage {

@ViewChild('map') mapElement:ElementRef
map:any
placeListRef$: FirebaseListObservable<any>
placeArray = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db:AngularFireDatabase,
    alertCtrl:AlertController

  ) {
    this.placeListRef$ = db.list('place1')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpinPage');
    this.loadMap()
  }
loadMap(){
  let LatLng  = new google.maps.LatLng(33.2232 , 43.6793 );
  let mapOptions = {
    center:LatLng,
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  let infowindow = new google.maps.Infowindow();
  let marker , i ;

  this.placeListRef$.subscribe(actions =>{
    actions.forEach(action => {
      let y = action.payload.toJSON()
      y['key'] = action.key
      this.placeArray.push(y as PlaceItem)
      
    })

for (const value of this.placeArray) {
  let marker = new google.maps.Marker({
    position : new google.maps.LatLng(value['latitude'],value['longtitude']),
    map: this.map
  })
  marker.info = new google.maps.Infowindow({
    content: value['info']
  })

google.maps.events.addListener(marker , 'click' , function(){
  let marker_map = this.getMap();
  this.info.open(marker_map,this)
  alert(this.info.content)
});

}

  })
}
}
