import { Component, OnInit } from '@angular/core';
import {LocalStorageManagerService} from "../../services/local-storage-manager.service";
import {Product} from "../../models/Product";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart: any;
  cartCounter: number = 0;

  constructor(private storageManager: LocalStorageManagerService) { }

  ngOnInit(): void {
    this.storageManager.getCartObserver().subscribe((cart: Product) => this.cart = cart)
    this.storageManager.getCartCounterObserver().subscribe((counter: number) => this.cartCounter = counter)
  }

  removeItem(productId: number) {
    this.storageManager.removeCartItem(productId);
  }
}
