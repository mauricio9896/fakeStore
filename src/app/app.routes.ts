import { Routes } from '@angular/router';
import { PageProductsComponent } from './modules/products/pages/page-products/page-products.component';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { LoginComponent } from './modules/auth/login/login.component';

export const routes: Routes = [

  {
    path:'home',
    component: LayoutComponent,
    children:[
      {
        path: 'products',
        component: PageProductsComponent
      },
      {
        path:'**',
        redirectTo: 'products',
      }
    ]
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:'**',
    redirectTo: 'login',
  }
];
