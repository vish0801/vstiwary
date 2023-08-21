import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './products/add-product/add-product.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details.component';


const routes: Routes = [

  {
    path: 'products',
    children: [
      { path: 'add', component: AddProductComponent },

      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailsComponent },
    ]
  },
  { path: '', component: ProductListComponent },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
