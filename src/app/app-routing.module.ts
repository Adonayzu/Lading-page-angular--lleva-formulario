import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ProductoDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent }, // las comillas porque sea un vacio 
  {path: 'products', component : ProductsComponent},
  {path: 'products/:productoId', component: ProductoDetailComponent },
  {path: 'contact', component : ContactComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'} //igual en redirecTo las comillas es por home pero en vacio es para que regrese a home 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
