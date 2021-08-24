import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class LampService {
  lamps: Product[]=[
    new Product(1,'lamp 1', 'This is a lamp',100),
    new Product(2,'lamp 2', 'This is a lamp',104),
    new Product(3,'lamp 3', 'This is a lamp',160),
    new Product(4,'lamp 4', 'This is a lamp',180),
    new Product(5,'lamp 5', 'This is a lamp',190),
    new Product(6,'lamp 6', 'This is a lamp',104),
  
  ]
    
    constructor() { }
  
    getlamps(): Product[]{
  
      return this.lamps
    }
  }

