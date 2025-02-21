import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  const token = tokenService.gettoken();
  if(!token) return next(req);
  const clone = req.clone({
    setHeaders:{
      'Authorization': `Bearer ${token}`,
      'Content-type': 'application/json'
    }
  })
  return next(clone);
};


