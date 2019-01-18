import {NgModule} from "@angular/core";
import {ShopService} from './shop/shop.service';
import {ProductService} from './product/product.service';

@NgModule({
  imports: [

  ],
  declarations: [
  ],
  entryComponents: [],
  exports: [
  ],
  providers: [
    ShopService,
    ProductService
  ]
})
export class ServicesModule {

}
