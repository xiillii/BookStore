import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { RestDatasource } from './rest.datasource';

@Injectable()
export class BookRepository {
  private books: Book[] = [];
  private genres: string[] = [];

  constructor(private dataSource: RestDatasource) {
    dataSource.getBooks().subscribe(data => {
      this.books = data;
      this.genres = data.map(b => b.genre)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }

  getBooks(genre: string = null): Book[] {
    return this.books.filter(b => genre == null || genre == b.genre);
  }

  getBook(id: number): Book {


    return this.books.find(b => b.id == id);
  }

  getGenres(): string[] {
    return this.genres;
  }

  saveBook(book: Book) {
    if (book.id == null || book.id == 0) {
      this.dataSource.saveBook(book).subscribe(p => this.books.push(p));
    } else {
      this.dataSource.updateBook(book).subscribe(b => {
        this.books.splice(this.books.findIndex(b => b.id == book.id), 1, book);
      });
    }
  }

  deleteBook(id: number) {
    this.dataSource.deleteBook(id).subscribe(b => {
      this.books.splice(this.books.findIndex(b => b.id == id), 1);
    });
  }
}
