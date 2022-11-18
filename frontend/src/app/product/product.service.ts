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
      duration: 2000, horizontalPosition:"right", verticalPosition:"top",
      panelClass:isError ? ['msg-error'] : ['msg-sucess']
    })}
    create(product: Product): Observable<Product>{
      return this.http.post<Product>(this.API, product).pipe(
        map(obj => obj), catchError(e => this.errorHandler(e))
      )
     }
  list(){
    return this.http.get<Product[]>( this.API).pipe(
      map(obj => obj), catchError(e => this.errorHandler(e))
    )
  }
  /*ja feito no backend talves esses metodos sejam
    return this.http.get<Product[]>( this.API).pipe(first(),delay(2000),
    tap(product => console.log(product)))
  */
  readById(id: any): Observable<Product> {
    const url = `${this.API}/${id}`
return this.http.get<Product>(url).pipe(
  map(obj => obj), catchError(e => this.errorHandler(e))
)
  }
  update(product: Product): Observable<Product>{
    const url = `${this.API}/${product.id}`
return this.http.put<Product>(url, product).pipe(
  map(obj => obj), catchError(e => this.errorHandler(e))
)

  }
  delete(id: any): Observable<Product>{
    const url = `${this.API}/${id}`
    return this.http.delete<Product>(url).pipe(
      map(obj => obj), catchError(e => this.errorHandler(e))
    )
  }
  errorHandler(e: any): Observable<any>{
    this.showMessage('Erro ao carregar o backend',true)
    return EMPTY

  }

}
