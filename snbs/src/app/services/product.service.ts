import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from '../models/product';
import { environment } from '../environments/environment';

// const baseUrl = 'http://localhost:8090/snbs/api/product/';

@Injectable({
  providedIn: 'root',
})
export class ProductService {


  //private productsURL = environment.PRODUCTS_URL;

  private productsURL = "/api/products/products.json";

  // private baseUrl = environment.apiUrl;
  // private baseUrl = 'http://localhost:8090/snbs/api/product/';

  //https://jsonplaceholder.typicode.com/users

  constructor(private http: HttpClient) { }

  // getAll(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(this.brandsURL);
  //   // return this.http.get<IProduct[]>(this.productUrl);
  // }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsURL)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
//Use this with actuall service
  // get(id: number): Observable<IProduct> {
  //   const uri = `${this.productsURL}${id}`;
  //   return this.http.get<IProduct>(uri);
  // }

  get(id: number): Observable<IProduct> {
    const uri = `${this.productsURL}${id}`;
    return this.http.get<IProduct>(uri);
  }


  create(data: any): Observable<any> {
    return this.http.post(this.productsURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.productsURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.productsURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.productsURL);
  }

  private handleError(err): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeProduct(): IProduct {
    // Return an initialized object
    return {
      productId: 0,
      productName: null,
      productCode: null,
      //tags: [''],
      purchaseDate: null,
      pPrice: null,
      sPrice: null,
      description: null,
      starRating: null,
      imageUrl: null,
      productType: null,
      quantity: null,
      unit: null,
      amount: null
    };
  }

}
