import { Component } from '@angular/core';
import { ItemCarrito } from 'src/app/entities/itemCarrito';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  listaItemsCarrito: ItemCarrito[] | undefined;

  ngOnInit(): void {
    let carritoStorage = localStorage.getItem('carrito') as string;
    let carrito = JSON.parse(carritoStorage);
    if (carrito) {
      this.listaItemsCarrito = carrito;
    }
  }

  vaciarCarrito() {
    localStorage.removeItem('carrito');
    this.listaItemsCarrito = [];
  }

  //metodo para eliminar producto de carrito si tiene mas de 1 cantidad se resta 1 si no se elimina
  eliminarProductoCarrito(producto: ItemCarrito) {
    let carritoStorage = localStorage.getItem('carrito') as string;
    let carrito = JSON.parse(carritoStorage);
    let index = -1;

    for (let i = 0; i < carrito.length; i++) {
      let itemC: ItemCarrito = carrito[i];
      if (itemC.id === producto.id) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      let item: ItemCarrito = carrito[index];
      if (item.cantidad! > 1) {
        item.cantidad!--;
      } else {
        carrito.splice(index, 1);
      }
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    this.listaItemsCarrito = carrito;
    alert('Producto eliminado del carrito');
  }
}
