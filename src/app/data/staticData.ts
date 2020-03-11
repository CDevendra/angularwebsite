import { Injectable } from "@angular/core";

@Injectable()
export class StaticData {
    getProductList(): any{
    return [
        { id:"1", imgSrc: "../assets/images/product_01.png", name: "Bioderma", oldPrice:"22.65", price: "55.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
        { id:"2", imgSrc: "../assets/images/product_02.png", name: "Chanca Piedra", oldPrice: "10.00", price: "120.00", description:"Some quick example text to build on the card's content." },
        { id:"3", imgSrc: "../assets/images/product_03.png", name: "Umcka Cold CareUmcka Cold CareUmcka ColdUmcka Cold CareUmcka Cold CareUmcka Cold", oldPrice: "32.00", price: "220.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content."  },
        { id:"4", imgSrc: "../assets/images/product_04.png", name: "Cetyl Pure", oldPrice: "12.00", price: "75.00", description:"Some quick example text to build the bulk of the card's content." },
        { id:"5", imgSrc: "../assets/pictures/product_2.jpg", name: "Poo Pourri", oldPrice: "20.00", price: "25.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
        { id:"6", imgSrc: "../assets/pictures/chair_1.jpg", name: "CLA Core", oldPrice: "120.00", price: "65.00", description:"Some quick example build on the card card's content." },
        { id:"7", imgSrc: "../assets/pictures/product_1.jpg", name: "Poo Pourri", oldPrice: "120.00", price: "15.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
      ];
    }

}