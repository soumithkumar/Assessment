import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service"

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: object[] = []; //TS Model need to be created here
  constructor(private productService:ProductService) {
  console.error(this.productService);
  }

  ngOnInit() {
     this.productList = this.productService.getProducts();
  }

  onDeleteProduct(prodObj){
      this.productList = this.productService.deleteProduct(prodObj["id"]);
  }

}
