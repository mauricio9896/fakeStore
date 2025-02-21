import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category, Filter, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private url : string = 'https://young-sands-07814.herokuapp.com/api/'


  getProducts( filters: Filter[] ){
    const url = new URL(this.url + 'products');
    filters?.forEach( filter => url.searchParams.append(filter.filterName, filter.filterValue ))
    return this.http.get<Product[]>(url.toString());
  }

  getCategories(){
    return this.http.get<Category[]>(this.url + 'categories');
  }

}
