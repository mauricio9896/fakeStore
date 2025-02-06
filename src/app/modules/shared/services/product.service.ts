import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category, Filter, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private url : string = 'https://api.escuelajs.co/api/v1/'


  getProducts( filters: Filter[] ){
    const url = new URL(this.url + 'products');
    filters?.forEach( filter => url.searchParams.append(filter.filterName, filter.filterValue ))
    return this.http.get<Product[]>(url.toString());
  }

  getCategories(){
    return this.http.get<Category[]>(this.url + 'categories');
  }

}
