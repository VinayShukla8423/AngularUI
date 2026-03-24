import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { AboutComponent } from './components/about-component/about-component';
import { ContactComponent } from './components/contact-component/contact-component';
import { NgModule } from '@angular/core';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Product } from './components/product/product';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
   { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'product', component: Product },
  { path: 'dashboard', component: Dashboard },


  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}