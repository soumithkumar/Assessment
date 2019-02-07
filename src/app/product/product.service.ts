import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: object[] = [];
  constructor() {
    //Initialize sample date
    this.productList = [{"id":1,"name":"Kohinoor","price":"$3000"},{"id":2,"name":"EsperanzaDiamond","price":"$2000"},{"id":3,"name":"EurekaDiamond","price":"$5000"}];
    }


  getProducts(){
    return this.productList;
  }

  deleteProduct(id){
    this.productList = this.productList.filter(prodObj =>{
        return prodObj.id != id;
    });
    return this.productList;
  }

}
