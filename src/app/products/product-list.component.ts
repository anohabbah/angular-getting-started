import {Component, OnInit} from '@angular/core';
import {IProduct, Product} from './product';
import {ProductService} from './product.service';

@Component({
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  imageWidth: number = 20;
  imageMargin: number = 2;
  showImages: boolean = false;
  private _listFilter: string;
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  private errorMessage: string;

  constructor(private _productService: ProductService) {
  }

  toggleImage(): void {
    this.showImages = !this.showImages;
  }

  ngOnInit(): void {
    this._productService.getProducts()
      .subscribe( (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      }, error => this.errorMessage = <any>error);
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
  }

  onNotify(message: string): void {}
}
