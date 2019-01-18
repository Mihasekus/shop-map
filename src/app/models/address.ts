class Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

class LocationAddress {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}
