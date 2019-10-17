import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { PlaceItem } from '../../models/add-place/add-place.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

declare var google;

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapRef:ElementRef;
  map : any;
  destination:string;
  start:string;
  placeListRef$: FirebaseListObservable<PlaceItem[]>
  constructor(
    private http: Http,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private launchNavigator: LaunchNavigator,
    public geolocation: Geolocation,
    private database: AngularFireDatabase
  ) {
      this.start = "";
      this.destination = "{{ item.latlng }}";
      this.placeListRef$ = this.database.list('placelist');
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
ionViewDidLoad(){
  this.showMap();
  this.getMarkers();
}

  showMap() {
    //Location 
    let latLng = new google.maps.LatLng(7.9659775,98.3279473);

    // map
    let options = {
      center: latLng,
      zoom: 10.5,
      streetViewControl:false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    

  }

  getMarkers(){
    this.http.get('assets/data/markers.json').map((res)=>res.json())
    .subscribe(data=>{
      this.addMarkersMap(data);
      console.log(data);
    })
  }
  addMarkersMap(markers){
    for(let marker of markers){
    var loc = {lat: marker.latitude , lng: marker.longitude}
    marker = new google.maps.Marker({
      position : loc,
      map: this.map,
      title:marker.name,
      label:marker.content
    });
    }
  }




}