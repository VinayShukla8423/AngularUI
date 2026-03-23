import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService  {
  //  private apiUrl = 'https://localhost:5001/api/product';
   private apiUrl = 'https://localhost:7269/api/product';
  
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
}
addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }

  updateProduct(data: any) {
  return this.http.put(`this.apiUrl/${data.id}`, data);
}

deleteProduct(id: number) {
  return this.http.delete(`this.apiUrl/${id}`);
}


}
