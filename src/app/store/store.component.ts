import { Component } from '@angular/core';
import { Book } from '../model/book.model';
import { BookRepository } from '../model/book.repository';

@Component({
  selector: 'store',
  templateUrl: 'store.component.html'
})
export class StoreComponent {

  selectedGenre = null;

  constructor(private repository: BookRepository) { }

  get books(): Book[] {
    return this.repository.getBooks(this.selectedGenre);
  }

  get  genres(): string[] {
    return this.repository.getGenres();
  }

  changeGenre(genre?: string) {
    this.selectedGenre = genre;
  }
}
