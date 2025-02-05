import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  closeNavbar = signal<boolean>(true);

  toogleNavbar(){
    this.closeNavbar.update(state => !state);
  }
}
