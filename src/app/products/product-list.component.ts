import {Component, OnInit} from '@angular/core';
import {IProduct, Product} from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  imageWidth: number = 20;
  imageMargin: number = 2;
  showImages: boolean = false;
  private _listFilter: string = 'cart';
  filteredProducts: IProduct[];
  products: IProduct[] = [
    new Product(1, 'Leaf Rake', 'GDN-0011', 'March 19, 2016', 19.95,
      'Leaf rake with 48-inch wooden handle.', 3.2, 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'),
    new Product(2, 'Garden Cart', 'GDN-0023', 'March 18, 2016', 32.99,
      '15 gallon capacity rolling garden cart', 4.2, 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'),
    new Product(5, 'Hammer', 'TBX-0048', 'May 21, 2016', 8.9,
      'Curved claw steel hammer', 4.8, 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'),
    new Product(8, 'Saw', 'TBX-0022', 'May 15, 2016', 11.55,
      '15-inch steel blade hand saw', 3.7, 'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'),
    new Product(10, 'Video Game Controller', 'GMG-0042', 'October 15, 2015', 35.95,
      'Standard two-button video game controller', 4.6, 'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'),
  ];

  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }

  toggleImage(): void {
    this.showImages = !this.showImages;
  }

  ngOnInit(): void {
    console.log('On Init');
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
