import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { StaticDatasource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDatasource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [BookRepository, StaticDatasource, Cart, Order, OrderRepository,
    { provide: StaticDatasource, useClass: RestDatasource }]
})
export class ModelModule { }
