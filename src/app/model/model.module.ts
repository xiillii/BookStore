import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { StaticDatasource } from './static.datasource';
import { Cart } from './cart.model';

@NgModule({
  providers: [BookRepository, StaticDatasource, Cart]
})
export class ModelModule { }
