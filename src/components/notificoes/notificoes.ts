import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadingController } from 'ionic-angular'
import { Observable } from 'rxjs/Observable'

declare var google : any;

@Component({
  selector: 'notificoes',
  templateUrl: 'notificoes.html'
})
export class NotificoesComponent {

  text: string;
  public map;
  public currentLocation;


  constructor(public geolocation : Geolocation,
    public loadingCtrl : LoadingController) {
    console.log('Hello NotificoesComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.map =this.createMap();

    this.getCurrentLocation().subscribe(location => {
      this.map.setCenter(location);
    });
  }

  getCurrentLocation() {

    let loading = this.loadingCtrl.create({
      content:'Localizando sua van...'
    });

    loading.present();

    let options = {timeout : 10000 , enableHighAccuracy:true};
    let locationObs = new Observable(observable => {
      this.geolocation.getCurrentPosition(options)
      .then(resp => {
        let lat = resp.coords.latitude;
        let lng = resp.coords.longitude;
        console.log('lat '+ lat +' == '+ 'long '+lng )
        let location = new google.maps.LatLng(lat, lng);
        console.log('current location '+location)
        observable.next(location);

        loading.dismiss();
      })
    })
    return locationObs;
  }

  createMap(location = new google.maps.LatLng(40.712784,-74.005942)){
    console.log('init location ' + location)
    let mapOptions = {
      center: location,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      disableDefaultUI:true
    }
    let mapEl = document.getElementById("map");
    let map = new google.maps.Map(mapEl,mapOptions);

    return map;
  }

  centerLocation(location){
    if(location){
      this.map.setCenter(location);
    }
    else{
      this.getCurrentLocation().subscribe(currentLocation => {
        this.map.setCenter(currentLocation);
      })
    }
  }


}
