import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { CarritoComponent } from './public/carrito/carrito.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carrito', component: CarritoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
