import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from './../../../product/product.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {
    name: "",
    price:0
  }
  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
    ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe((product) =>{
      this.product = product
    })
  }
  updateProduct(): void {
    this.service.update(this.product).subscribe(() => {
      this.service.showMessage('Produto Alterado com sucesso')
      this.router.navigate(['/products'])

  })

  }
  cancel(): void {
    this.router.navigate(['/products'])

  }

}
