import { Component } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './products.service';

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
   selector: 'demo-app',
   templateUrl: './app.component.html',
   providers: [ProductService]
})

export   class   AppComponent  {
   iproducts: Iproduct[];
   constructor(private _product: ProductService){
   }
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }
}








