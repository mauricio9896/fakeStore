import { Routes } from '@angular/router';
import { PageProductsComponent } from './modules/products/pages/page-products/page-products.component';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';

export const routes: Routes = [

  {
    path:'',
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

];
