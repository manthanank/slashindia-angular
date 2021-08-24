import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
  styleUrls: ['./table-items.component.css']
})
export class TableItemsComponent implements OnInit {

  @Input()
  tableItem!: Product;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
