import { User } from '../../shared/models/user.model';
import { AuthService } from './../../shared/services/auth.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private authService = inject(AuthService);
  private user : User = {
      id: 1,
      email: "john@mail.com",
      password: "changeme",
      name: "Jhon"
  }


  login(){
    this.authService.login(this.user.email, this.user.password).subscribe((res)=>{
      console.log('res :>> ', res);
    })
  }
}
