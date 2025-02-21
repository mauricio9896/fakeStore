import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs';
import { TokenService } from './token.service';
import { AuthResponse } from '../models/auth.model';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private http = inject(HttpClient);
  private tokenService = inject(TokenService);
  private router = inject(Router);
  private url : string = 'https://young-sands-07814.herokuapp.com/api/auth';

  constructor() { }

  login( email : string , password : string){
    return this.http.post<AuthResponse>(`${this.url}/login`, {email, password}).pipe(
      tap((authResponse : AuthResponse) => {
        this.tokenService.settoken(authResponse.access_token);
        this.router.navigate(["/home"]);
      }),
      switchMap(
        ()=> this.getProfile()
      ),
    );
  }

  getProfile(){
    return this.http.get<User>(`${this.url}/profile`)
  }
}
