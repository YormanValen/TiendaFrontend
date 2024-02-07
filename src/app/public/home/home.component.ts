import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemCarrito } from 'src/app/entities/itemCarrito';
import { Product } from 'src/app/entities/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  datos: any;
  selectedCategoryId: number | null = null;
  selectedAvailable: boolean | null = null;
  selectedBestSeller: boolean | null = null; // Nueva variable para productos más vendidos

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/productos.json').subscribe((data) => {
      this.datos = data;
      console.log(this.datos);
    });
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  selectAvailable(available: boolean) {
    this.selectedAvailable = available;
  }

  selectBestSeller(bestSeller: boolean) {
    this.selectedBestSeller = bestSeller;
  }

  agregarCarrito(producto: any) {
    console.log('Agregando al carrito: ');
    console.log(producto);

    let iCarrito: ItemCarrito = {
      id: producto.id,
      name: producto.name,
      price: producto.price,
      available: producto.available,
      best_seller: producto.best_seller,
      categories: producto.categories,
      img: producto.img,
      description: producto.description,
      cantidad: 1,
    };

    if (localStorage.getItem('carrito')) {
      console.log('Ya existe el carrito');
      let carritoStorage = localStorage.getItem('carrito') as string;
      let carrito = JSON.parse(carritoStorage);

      let index = -1;

      for (let i = 0; i < carrito.length; i++) {
        let itemC: ItemCarrito = carrito[i];
        if (itemC.id === iCarrito.id) {
          index = i;
          break;
        }
      }

      if (index === -1) {
        carrito.push(iCarrito);
        localStorage.setItem('carrito', JSON.stringify(carrito));
      } else {
        console.log('Ya existe el producto en el carrito');
        let item: ItemCarrito = carrito[index];
        item.cantidad!++;
        console.log('Item: ');
        console.log(item);
        carrito[index] = item;
        localStorage.setItem('carrito', JSON.stringify(carrito));
      }
    } else {
      let carrito: ItemCarrito[] = [];
      carrito.push(iCarrito);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }
}
