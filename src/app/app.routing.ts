import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full'}, 
	// { path: 'header', component: HeaderComponent }, 
	// { path: 'footer', component: FooterComponent }, 
	{ path: 'home', component: HomeComponent }, 
	{ path: 'cart', component: CartComponent }, 
	// { path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule 	 { }
