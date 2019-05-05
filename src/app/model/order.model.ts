import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()
export class Order {
  public id: number;
  public name: string;
  public address: string;
  public country: string;
  public shipped = false;

  constructor(public cart: Cart) { }

  clear() {
    this.id = null;
    this.name = this.address = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}
