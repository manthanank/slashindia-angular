import { Component, OnInit ,Input} from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-printing-item',
  templateUrl: './printing-item.component.html',
  styleUrls: ['./printing-item.component.css']
})
export class PrintingItemComponent implements OnInit {

  @Input() 
  printingItem!:Product;
  constructor() { }
  handler:any = null;
  ngOnInit(): void {
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
