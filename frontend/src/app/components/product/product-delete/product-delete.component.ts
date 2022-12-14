import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../product/product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product ={
    name: "",
    price: 0
  }

  constructor(
    private service: ProductService,
    private router: Router,
    private route: ActivatedRoute
     ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(product => {
      this.product = product

    })
  }
  deleteProduct(): void{
    this.service.delete(this.product.id).subscribe((product)=> {
      this.product = product/*remover*/
       this.service.showMessage("Producto Excluido com sucesso")
       this.router.navigate(['/products'])
  })
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
