import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/Product";
import {ProductService} from "../../services/product.service";
import {LocalStorageManagerService} from "../../services/local-storage-manager.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private localStorageManager: LocalStorageManagerService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((productResponse) => this.products = productResponse.products);
  }

  addToCart(product: Product) {
    this.localStorageManager.addToCart(product);
  }
}
