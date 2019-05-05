import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { StaticDatasource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDatasource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [BookRepository, Cart, Order, OrderRepository,
    { provide: StaticDatasource, useClass: RestDatasource },
    RestDatasource, AuthService]
})
export class ModelModule { }
