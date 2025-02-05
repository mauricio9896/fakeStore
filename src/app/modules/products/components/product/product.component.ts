import { CartService } from './../../../shared/services/cart.service';
import { Component, Input, inject } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required: true}) product !: Product;
  private cartService = inject(CartService);

  addProduct(product : Product){
    this.cartService.addToCart(product);
  }
}
