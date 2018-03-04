import {Component} from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">{{pageTitle}}</a>
        </div>
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Products List</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
