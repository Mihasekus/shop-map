/// <reference types="@types/googlemaps" />
import {Component, OnInit, ViewChild} from "@angular/core";


@Component({
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(
  ) {
  }

  public ngOnInit(): void {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }
}
