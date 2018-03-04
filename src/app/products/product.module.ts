import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ProductDetailComponent} from './product-detail.component';
import {ConvertToSpaces} from '../shared/convert-to-spaces';
import {RouterModule} from '@angular/router';
import {ProductGuardService} from './product-guard.service';
import {ProductService} from './product.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductGuardService]},
    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpaces
  ],
  providers: [ProductGuardService, ProductService]
})
export class ProductModule {
}
