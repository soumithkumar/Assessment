import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule
  ],
  providers:[ProductService]
})
export class ProductModule { }
