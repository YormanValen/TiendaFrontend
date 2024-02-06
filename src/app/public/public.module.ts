import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './carrito/carrito.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarritoComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarritoComponent,
    SidebarComponent
  ]
})
export class PublicModule { }
