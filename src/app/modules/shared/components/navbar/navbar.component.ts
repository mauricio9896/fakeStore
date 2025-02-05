import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterLink,  RouterLinkActive } from '@angular/router'

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
