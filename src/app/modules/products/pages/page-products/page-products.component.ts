import { Component, inject, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { ProductService } from '../../../shared/services/product.service';
import { Filter, Product } from '../../../shared/models/product.model';
import { FilterProductsComponent } from "../../components/filter-products/filter-products.component";

@Component({
  selector: 'app-page-products',
  imports: [ProductComponent, FilterProductsComponent],
  templateUrl: './page-products.component.html',
  styleUrl: './page-products.component.css'
})
export class PageProductsComponent implements OnChanges {

  @Input() categoryId !: string; // es un queryParam

  products = signal<Product[]>([]);
  private productService = inject(ProductService);

  ngOnChanges( changes : SimpleChanges ): void {
    const categoryId = changes['categoryId'];
    this.getProducts([]);
  }

  getProducts(filters : Filter[]){
    this.productService.getProducts(filters).subscribe({
      next:(products: Product[] | null  )=> {
        if( !products?.length ) return console.log("No have products", products);
        this.products.set(products);
      },
      error:(error: Error)=> console.error(error.message)
    })
  }
}
