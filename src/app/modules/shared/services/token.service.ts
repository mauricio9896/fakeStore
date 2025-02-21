import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public settoken(token : string): void {
    localStorage.setItem('token', token);
  }

  public gettoken(): string | null {
    return localStorage.getItem('token');
  }
}
