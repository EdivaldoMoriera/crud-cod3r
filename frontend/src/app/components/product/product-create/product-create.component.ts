import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../../../product/product.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price:0
  }


  constructor(private service: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }
  createProduct(){
    this.service.create(this.product).subscribe(()=> {  this.service.showMessage("Produto criado")
    console.log(this.product)
    this.router.navigate(['/products'])
  })
  }
  cancel(){
    this.router.navigate(['/products'])
  }

}
