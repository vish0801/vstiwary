import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';
import { IProduct } from '../models/product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product List';
  showImage: boolean = false;
  
  errorMessage = '';

  private _listFilter: string = '';
  products: any[] = [];

  filteredProducts : IProduct[]= [];

  get listFilter():string{
    return this._listFilter;
  }


  set listFilter(value : string){
    this._listFilter = value;
    console.log('In setter!',value);
    this.filteredProducts = this.performFilter(value);
  }



  imageWidth: number = 50;
  imageMargin: number = 2;

  sub!: Subscription;

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }


  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  // ngOnInit() {
  //   this.listFilter = 'cart';
  //   this.getAllProducts();
  // }

  performFilter(filterBy : string) : IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  getAllProducts(): void {
    console.log("Inside get All products");
    this.sub = this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  // deleteBrand(brand: Brand) {
  //   this.brandService.deleteBrand(brand.id).subscribe((data) => {
  //     this.getAllBrandsView();
  //   });
  // }



  //  deleteTheBrand(brand: Brand) {
  //    Swal.fire({
  //      title: 'Are you sure?',
  //      text: 'You will not be able to recover this Brand',
  //      icon: 'warning',
  //      showCancelButton: true,
  //      cancelButtonColor: '#3085d6',
  //      confirmButtonColor: '#d33',
  //      confirmButtonText: 'Yes, delete it!',
  //      cancelButtonText: 'No, keep it'
  //    }).then((result) => {
  //      if (result.value) {
  //        this.brandService.deleteBrand(brand.id).subscribe((data) => {
  //          this.getAllBrandsView();
  //        });
  //        Swal.fire(
  //        'Deleted!',
  //        `<strong style="color:red;">Your selected Brand has been deleted.</strong>`,
  //        'success'
  //      );

  //      } else if (result.dismiss === Swal.DismissReason.cancel) {
  //      Swal.fire(
  //        'Cancelled',
  //        'Your Brand is safe :)',
  //        'error'
  //      );
  //      }
  //    });
  //  }




  //  updateBrand(brand: Brand) {
  //    localStorage.removeItem('editBrandId');
  //    localStorage.setItem('editBrandId', brand.id);
  //    this.router.navigate(['brand/edit-brand']);
  //  }

  //  Search() {
  //    if (this.name !== '') {
  //    } else if (this.name === '') {
  //      this.ngOnInit();
  //    }
  //    this.brands = this.brands.filter((res) => {
  //      return res.name.toLowerCase().match(this.name.toLowerCase());
  //    });
  //  }


  //  trackBrand(brand: { id: any }) {
  //    return brand ? brand.id : undefined;
  //  }




}
