import { StaticData } from './data/staticData';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ShopSingleComponent } from './shop-single/shop-single.component';
import { ExpertsInformationComponent } from './experts-information/experts-information.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShopSingleComponent,
    ExpertsInformationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
    // RouterModule
		// RouterModule.forRoot(AppRoutes, {enableTracing: false,})
  ],
  providers: [StaticData],
  bootstrap: [AppComponent],
})
export class AppModule { }
