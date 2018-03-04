export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;

  calculerDiscount(percent: number): number;
}

export class Product implements IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;

  constructor(productId: number,
              productName: string,
              productCode: string,
              releaseDate: string,
              price: number,
              description: string,
              starRating: number,
              imageUrl: string) {
    this.productId = productId;
    this.productCode = productCode;
    this.productName = productName;
    this.releaseDate = releaseDate;
    this.price = price;
    this.description = description;
    this.starRating = starRating;
    this.imageUrl = imageUrl;
  }

  calculerDiscount(percent: number): number {
    return this.price * (1 - percent / 100);
  }
}
