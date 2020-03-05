import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  popularProductList: any = [
    { imgSrc: "../assets/images/product_01.png", name: "Bioderma", price: "$55.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
    { imgSrc: "../assets/images/product_02.png", name: "Chanca Piedra", price: "$120.00", description:"Some quick example text to build on the card's content." },
    { imgSrc: "../assets/images/product_03.png", name: "Umcka Cold Care", price: "$32.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content."  },
    { imgSrc: "../assets/images/product_04.png", name: "Cetyl Pure", price: "$75.00", description:"Some quick example text to build the bulk of the card's content." },
    { imgSrc: "../assets/images/product_05.png", name: "Poo Pourri", price: "$25.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
    { imgSrc: "../assets/images/product_06.png", name: "CLA Core", price: "$65.00", description:"Some quick example build on the card card's content." },
    { imgSrc: "../assets/images/product_04.png", name: "Poo Pourri", price: "$15.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
  ];

  ngOnInit() {
  }

}
