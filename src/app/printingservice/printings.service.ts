import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
@Injectable({
  providedIn: 'root'
})
export class PrintingsService {
  printings: Product[]=[
    new Product(1,'printing 1', 'This is a printing',100),
    new Product(2,'printing 2', 'This is a printing',104),
    new Product(3,'printing 3', 'This is a printing',160),
    new Product(4,'printing 4', 'This is a printing',180),
    new Product(5,'printing 5', 'This is a printing',190),
    new Product(6,'printing 6', 'This is a printing',104),
  
  ]
    
    constructor() { }
  
    getprintings(): Product[]{
  
      return this.printings
    }
  }

