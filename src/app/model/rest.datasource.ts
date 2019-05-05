import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { map } from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDatasource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getBooks(): Observable<Book[]> {
    return  this.http.get<Book[]>(this.baseUrl + 'books');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', order);
  }

  authenticate(user: string, pass: string): Observable<boolean> {

    return this.http.post<any>(this.baseUrl + 'login', {
      name: user, password: pass
    }).pipe(map(response => {
      this.auth_token = response.success ? response.token : null;

      return response.success;
    }));
  }
}
