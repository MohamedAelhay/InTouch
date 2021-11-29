import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagerService {
  cart: BehaviorSubject<Product> = new BehaviorSubject<any>('');
  cartCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
    this.cart.next(this.getCart());
    this.cartCounter.next(this.getCartLength());
  }

  addToCart(product: Product) {
    let cart = this.getCart();
    let exists = cart.findIndex((cartProduct: Product) => cartProduct.id == product.id);

    if (exists == -1) {
      product['qty'] = 1
      cart.push(product)
    } else {
      product['qty'] ++
      cart.splice(exists,1,product)
    }

    this.setCartIntoStorage(cart);
  }

  removeCartItem(productId: number) {
    let cart = this.getCart()
    cart.splice(productId,1)

    this.setCartIntoStorage(cart);
  }

  getCart() {
    return JSON.parse(<string>localStorage.getItem('cart')) || [];
  }

  private setCartIntoStorage(cart: any) {
    this.cart.next(cart)
    this.cartCounter.next(cart.length)
    localStorage.setItem('cart',JSON.stringify(cart))
  }

  private getCartLength() {
    return this.getCart().length;
  }

  getCartObserver() {
    return this.cart.asObservable()
  }

  getCartCounterObserver() {
    return this.cartCounter.asObservable();
  }
}
