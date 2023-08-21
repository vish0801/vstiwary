import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from '../models/product';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pm-products-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product List';
  showImage: boolean = false;

  // private _listFilter: string = '';
  product!: IProduct;

  errorMessage = '';

  imageWidth: number = 50;
  imageMargin: number = 2;

  sub!: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    console.log('inside product details');
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.getProduct(id);
  }

  // public getProduct(id: any): IProduct {
  //   console.log("Inside get Product");
  //   this.sub = this.productService.get(id).subscribe((data) => {
  //     this.product = data;
  //     console.log(this.product);
  //   });

  //   console.log(this.product);
  //   return this.product;
  // }

  public getProduct(id: any): IProduct {

    this.productService.getProducts().subscribe({
      next: products => {
       // this.products = products;
       for (let p of products) {
        console.log(p.productId); // 1, "string", false
        if(p.productId == id){
          this.product = p;
        }
      }
      },
      error: err => this.errorMessage = err
    });


    console.log("Inside get Product");
    // this.sub = this.productService.get(id).subscribe((data) => {
    //   this.product = data;
    //   console.log(this.product);
    // });

    console.log(this.product);
    return this.product;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }


}
