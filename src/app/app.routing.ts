import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';

const routes: Routes = [
	{ 	path: '', redirectTo: 'home', pathMatch: 'full'},
	{ 	path: 'home', component: HomeComponent,
		// children: [
		// 	{ path: 'shop-single', component: ShopSingleComponent }
		// ] 
	}, 
	{ 	path: 'cart', component: CartComponent }, 
	{ 	path: 'home/shop-single/:id', component: ShopSingleComponent }, 
	// { path: '**', redirectTo: 'home' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule 	 { }
