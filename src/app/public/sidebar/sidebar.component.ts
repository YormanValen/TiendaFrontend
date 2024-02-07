import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() categorySelected = new EventEmitter<number>();
  @Output() availableSelected = new EventEmitter<boolean>();
  @Output() bestSellersSelected = new EventEmitter<boolean>();
  @Output() priceSelected = new EventEmitter<number>();

  onCategorySelected(event: any) {
    const selectedCategoryId = +event.target.value;
    console.log('Category selected: ' + selectedCategoryId);
    this.categorySelected.emit(selectedCategoryId);
  }

  onAvailableSelected(event: any) {
    const selectedAvailable = Boolean(event.target.value);
    console.log('Availability selected: ' + typeof selectedAvailable);
    this.availableSelected.emit(selectedAvailable);
  }

  onBestSellersSelected(event: any) {
    const selectedBestSellers = Boolean(event.target.value);
    console.log('Best Sellers selected: ' + typeof selectedBestSellers);
    this.bestSellersSelected.emit(selectedBestSellers);
  }

  onPriceSelected(selectedPrice: number ) {
    
    this.priceSelected.emit(selectedPrice);
  }
}
