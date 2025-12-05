import { Routes } from '@angular/router';
import { Home } from './shared/home/home.component';
import { CartDetailComponent } from './shared/detail/detail-cart.component';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'detail/:id', component: CartDetailComponent}
];
