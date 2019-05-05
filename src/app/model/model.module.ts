import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { StaticDatasource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule({
  providers: [BookRepository, StaticDatasource, Cart, Order, OrderRepository]
})
export class ModelModule { }
