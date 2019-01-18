
import {Component, OnInit} from '@angular/core';
import {Shop} from '../../models/shop';


@Component({
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {


  shop: Shop
  constructor(
  ) {
  }

  public ngOnInit(): void {
    this.shop = {
      id: "1",
      products: [],
      name : "TTN",
      descr: 'descr',
      address: "addre"
    }
  }

}
