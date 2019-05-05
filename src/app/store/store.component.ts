import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepository } from '../model/book.repository';
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

@Component({
  selector: 'store',
  templateUrl: 'store.component.html'
})
export class StoreComponent {

  selectedGenre = null;
  booksPerPage = 4;
  selectedPage = 1;

  constructor(private repository: BookRepository, private cart: Cart,
              private router: Router) { }

  get books(): Book[] {
    const pageIndex = (this.selectedPage - 1) * this.booksPerPage;
    return this.repository.getBooks(this.selectedGenre)
      .slice(pageIndex, pageIndex + this.booksPerPage);
  }

  get  genres(): string[] {
    return this.repository.getGenres();
  }

  changeGenre(genre?: string) {
    this.selectedGenre = genre;
    this.changePage(1);
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(size: number) {
    this.booksPerPage = size;
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(this.repository
      .getBooks(this.selectedGenre).length / this.booksPerPage);
  }

  addBookToCart(book: Book) {
    this.cart.addLine(book);
    this.router.navigateByUrl('/cart');
  }
}
