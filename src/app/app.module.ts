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
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

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
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
