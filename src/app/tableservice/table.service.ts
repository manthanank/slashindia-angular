import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class TableService {

  //populate from api
tables: Product[]=[
  new Product(1,'table 1', 'This is a table',100),
  new Product(2,'table 2', 'This is a table',104),
  new Product(3,'table 3', 'This is a table',160),
  new Product(4,'table 4', 'This is a table',180),
  new Product(5,'table 5', 'This is a table',190),
  new Product(6,'table 6', 'This is a table',104),

]
  
  constructor() { }

  gettables(): Product[]{

    return this.tables
  }
}
