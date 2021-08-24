import { Component, OnInit } from '@angular/core';
import { LampService } from 'src/app/lampservice/lamp.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-lamps',
  templateUrl: './lamps.component.html',
  styleUrls: ['./lamps.component.css']
})
export class LampsComponent implements OnInit {
  lampList: Product[]=[

  ]
  constructor(private lampService: LampService) { }

  ngOnInit(): void {
    this.lampList=this.lampService.getlamps();
  }

}
