import { Category } from './../../../shared/models/product.model';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-filter-products',
  imports: [ RouterLinkWithHref],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})

export class FilterProductsComponent implements OnInit {

  btnCategories = signal<boolean>(true);
  categories = signal<Category[]>([]);

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.getCategories();
  }

  handlerBtnCategories(){
    this.btnCategories.update(state => !state);
  }

  getCategories(){
    this.productService.getCategories().subscribe({
      next: (categories : Category[]) => {
        categories = categories.filter(category => Number(category.id) < 6)
        this.categories.set(categories);
      },
      error: (error)=> console.log(error)
    })
  }
}
