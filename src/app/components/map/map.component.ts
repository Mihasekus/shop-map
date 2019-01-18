/// <reference types="@types/googlemaps" />
import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  geocoder;
  shops = [
    {id: '1', name: 'TTN'}, {id: '1', name: 'SELUOT'}
  ];
  constructor( private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.geocoder = new google.maps.Geocoder();
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId);
  }

  codeAddress() {
    const address = 'Sydney, NSW';
    const map = this.map;
    this.geocoder.geocode({'address': address}, function (results, status) {
      if (status === 'OK') {
        map.setCenter(results[0].geometry.location);
        const marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  shopClick(id) {
    this.router.navigate(['/shop/' + id]);
  }
}
