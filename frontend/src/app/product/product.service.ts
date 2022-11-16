import { Product } from './../components/product/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { catchError, delay, EMPTY, first, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly API = 'api/products'


  constructor(private snackar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: boolean = false) : void{
    this.snackar.open(msg, 'X',{
      duration: 3000, horizontalPosition:"right", verticalPosition:"top",
      panelClass:isError ? ['msg-error'] : ['msg-sucess']
    })}
    create(product: Product): Observable<Product>{
      return this.http.post<Product>(this.API, product).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      )
     }
  list(){
    return this.http.get<Product[]>( this.API).pipe(first(),delay(2000),
    tap(product => console.log(product)))
  }
  /*ja feito no backend talves esses metodos sejam */
  readById(id: any): Observable<Product> {
    const url = `${this.API}/${id}`
return this.http.get<Product>(url)
  }
  update(product: Product): Observable<Product>{
    const url = `${this.API}/${product.id}`
return this.http.put<Product>(url, product)

  }
  delete(id: any): Observable<Product>{
    const url = `${this.API}/${id}`
    return this.http.delete<Product>(url)

  }
  errorHandler(e: any): Observable<any>{
    this.showMessage('Erro ao carregar o backend')
    return EMPTY

  }

}
