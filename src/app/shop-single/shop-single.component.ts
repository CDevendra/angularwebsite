import { StaticData } from './../data/staticData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-shop-single',
	templateUrl: './shop-single.component.html',
	styleUrls: ['./shop-single.component.css'],
	// providers: [ StaticData ]
})
export class ShopSingleComponent implements OnInit {

	productId: string;
	selectedProduct: any;
	constructor(private _activatedRoute: ActivatedRoute, private _router:Router,
		private _staticData: StaticData) { }

	ngOnInit() {
		this.productId = this._activatedRoute.snapshot.paramMap.get("id");
		let productList = this._staticData.getProductList();

		debugger
		this.selectedProduct  = productList.find(p => p.id == this.productId);
	}

	onBack(): void {
      this._router.navigate(['product']);
   }

}
