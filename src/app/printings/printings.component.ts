import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/models/product';
import { PrintingsService } from 'src/app/printingservice/printings.service';
@Component({
  selector: 'app-printing-item',
  templateUrl: './printings.component.html',
  styleUrls: ['./printings.component.css']
})
export class PrintingsComponent implements OnInit {

  printingList: Product[]=[

  ]
  constructor(private printingsService: PrintingsService) { }

  ngOnInit(): void {
    this.printingList=this.printingsService.getprintings();
  }
}
