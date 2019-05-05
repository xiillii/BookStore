import { NgModule } from '@angular/core';
import { BookRepository } from './book.repository';
import { StaticDatasource } from './static.datasource';

@NgModule({
  providers: [BookRepository, StaticDatasource]
})
export class ModelModule { }
