import { HeaderService } from './../../components/template/header/header.service';
import { ProductService } from './../../product/product.service';
import { Product } from './../../components/product/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],
})
export class ProductCrudComponent implements OnInit {
  product: Observable<Product[]>;

  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private router: Router, private service: ProductService, private headerService: HeaderService) {
    this.product = this.service.list();
    this.service.list().subscribe((product) => {
      console.log(product);

      headerService.headerData = {
        title: 'Novo Produto',
        icon: 'storefront',
        routerUrl: '/products'
      }
    });

  }

  ngOnInit(): void {}
  navegateProductCreate(): void {
    this.router.navigate(['products/create']);
  }
}
