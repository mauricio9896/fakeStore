import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductComponent } from "../../components/product/product.component";
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-page-products',
  imports: [ProductComponent],
  templateUrl: './page-products.component.html',
  styleUrl: './page-products.component.css'
})
export class PageProductsComponent implements OnInit {

  products = signal<Product[]>([]);
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next:(products: Product[] | null  )=> {
        if( !products?.length ) return console.log("No have products", products);
        this.products.set(products);
      },
      error:(error: Error)=> console.error(error.message)
    })
  }
}
