import { Injectable } from "@angular/core";
import { Book } from "./book.model";

@Injectable()
export class Cart {
  lines: CartLine[] = [];
  itemCount: number = 0;
  cartPrice: number = 0;

  addLine(book: Book, quantity: number = 1) {
    let line = this.lines.find(line => line.book.id == book.id);

    if (line != undefined) {
      line.quantity += Number(quantity);
    }
    else {
      this.lines.push(new CartLine(book, quantity));
    }

    this.recalculate();
  }

  updateQuantity(book: Book, quantity: number) {
    const line = this.lines.find(b => b.book.id == book.id);

    if (line != undefined) {
      line.quantity = Number(quantity);
    }

    this.recalculate();
  }

  removeLine(id: number) {
    const index = this.lines.findIndex(line => line.book.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }


  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += (l.quantity * l.book.price);
    });
  }
}


export class CartLine {

  constructor(public book: Book, public quantity: number) { }

  get lineTotal() {
    return this.quantity * this.book.price;
  }
}
