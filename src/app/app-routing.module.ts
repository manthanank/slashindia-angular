import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AboutComponent } from './about/about.component';
import { LampsComponent } from './lamps/lamps.component';
import { PrintingsComponent } from './printings/printings.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {path:'', component : HomeComponent},
  {path:'navbar', component : NavbarComponent},
  {path:'footer', component : FooterComponent},
  {path:'services', component : ServicesComponent},
  {path:'carousel', component : CarouselComponent},
  {path:'about', component : AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
