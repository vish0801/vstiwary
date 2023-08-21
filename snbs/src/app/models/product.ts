export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  description: string;
  productType: string;
  quantity: number;
  pPrice: number;
  sPrice: number;
  unit: string;
  purchaseDate: string;
  starRating: number;
  imageUrl: string;
  amount: string;
}



// /* Defines the product entity */
// export interface Product {
//   id: number;
//   productName: string;
//   productCode: string;
//   tags?: string[];
//   releaseDate: string;
//   price: number;
//   description: string;
//   starRating: number;
//   imageUrl: string;
// }