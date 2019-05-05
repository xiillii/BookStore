import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { StaticDatasource } from './static.datasource';

@Injectable()
export class BookRepository {
  private books: Book[] = [];
  private genres: string[] = [];

  constructor(private dataSource: StaticDatasource) {
    dataSource.getBooks().subscribe(data => {
      this.books = data;
      this.genres = data.map(b => b.genre)
        .filter((c, index, array) => array.indexOf(c) === index).sort();
    });
  }

  getBooks(genre: string = null): Book[] {
    return this.books.filter(b => genre == null || genre === b.genre);
  }

  getBook(id: number): Book {
    return this.books.find(b => b.id === id);
  }

  getGenres(): string[] {
    return this.genres;
  }
}
