import { Component, OnInit } from '@angular/core';
import {TableService} from 'src/app/tableservice/table.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tableList: Product[] = [

  ]
    constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableList=this.tableService.gettables()
    }

}
