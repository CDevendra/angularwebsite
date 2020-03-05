import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // RouterModule
		// RouterModule.forRoot(AppRoutes, {enableTracing: false,})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
