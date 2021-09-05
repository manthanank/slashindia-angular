import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
  styleUrls: ['./table-items.component.css']
})
export class TableItemsComponent implements OnInit {
  @Input()
  tableItem!: Product;
  constructor(private router:Router,private cartService : CartService) { }
  viewTable(){
    this.router.navigate(['tableview'])
  }
  handler:any = null;
  ngOnInit() {

    this.loadStripe();
  }

  pay(amount: number) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Pay',
      description: 'Here!',
      amount: amount * 100
    });

  }

  loadStripe()
  {
    if(!window.document.getElementById('stripe-script'))
    {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () =>
      {
        this.handler = (<any>window).StripeCheckout.configure(
        {
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any)
          {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }

}
