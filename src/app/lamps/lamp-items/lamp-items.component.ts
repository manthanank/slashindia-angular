import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-lamp-items',
  templateUrl: './lamp-items.component.html',
  styleUrls: ['./lamp-items.component.css']
})
export class LampItemsComponent implements OnInit {
  @Input() 
  lampItem!:Product;
  constructor() { }

  ngOnInit(): void {
  }

}
