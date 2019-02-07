import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component'
import {LoginComponent} from './authentication/login/login.component'

const routes: Routes = [
{"path":"list","component":ProductListComponent},
{"path":"login","component":LoginComponent},
 { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
