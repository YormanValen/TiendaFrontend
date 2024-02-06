import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  //necesito metodo para mostrar solo los productos de la categoria seleccionada en el home
  @Output() categorySelected = new EventEmitter<number>();

  onCategorySelected(event: any) {
    const selectedCategoryId = event.target.value;
    console.log('Categoria seleccionada: ' + selectedCategoryId);
    this.categorySelected.emit(selectedCategoryId);
  }
}
