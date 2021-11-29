import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/Product";
import {LocalStorageManagerService} from "../../services/local-storage-manager.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Product[];

  constructor(private storageManager : LocalStorageManagerService) {
    this.cart = this.storageManager.getCart();
  }

  ngOnInit(): void {
  }

  removeItem(prodId: number) {
    this.storageManager.removeCartItem(prodId)
    this.update_cart();
  }

  update_cart() {
    return this.cart = this.storageManager.getCart();
  }
}
