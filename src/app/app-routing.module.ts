import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:"", component:AllproductsComponent},
  {path:"wishlist" , component:WishlistComponent},
  {path:"cart", component:CartComponent},
  {path:"checkout" , component:CheckoutComponent},
  {path:"viewproduct/:id" , component:ViewproductComponent},
  {path:'user/register', component:RegisterComponent},
  {path:'user/login' , component:LoginComponent},
  {path:"**" ,component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
