import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';
import { LampsComponent } from './lamps/lamps.component';
import { PrintingsComponent } from './printings/printings.component';
import { PaymentComponent } from './payment/payment.component';
import { TableViewComponent } from './tables/table-view/table-view.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'navbar', component : NavbarComponent},
  {path:'footer', component : FooterComponent},
  {path:'services', component : ServicesComponent},
  {path:'about', component : AboutComponent},
  {path:'tables', component : TablesComponent},
  {path:'lamps', component : LampsComponent},
  {path:'printings', component : PrintingsComponent},
  {path:'payment', component : PaymentComponent},
  {path:'tableview', component: TableViewComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
