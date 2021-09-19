import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { TablesComponent } from './tables/tables.component';
import { LampsComponent } from './lamps/lamps.component';
import { PrintingsComponent } from './printings/printings.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PaymentComponent } from './payment/payment.component';
import { TableItemsComponent } from './tables/table-items/table-items.component';
import { LampItemsComponent } from './lamps/lamp-items/lamp-items.component';
import { PrintingItemComponent } from './printings/printing-item/printing-item.component';
import { TableViewComponent } from './tables/table-view/table-view.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    TablesComponent,
    LampsComponent,
    PrintingsComponent,
    AboutComponent,
    ServicesComponent,
    PaymentComponent,
    TableItemsComponent,
    LampItemsComponent,
    PrintingItemComponent,
    TableViewComponent,
    CartComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
