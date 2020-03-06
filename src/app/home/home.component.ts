import { Component, OnInit } from '@angular/core';
import { StaticData } from '../data/staticData';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor(private _staticData: StaticData ) { }

	popularProductList: any[] = this._staticData.getProductList();

	ngOnInit() {
	}

}
