import { Injectable } from "@angular/core";

@Injectable()
export class StaticData {
    getProductList(): any{
    return [
        { id:"1", imgSrc: "../assets/images/product_01.png", name: "Bioderma", price: "$55.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
        { id:"2", imgSrc: "../assets/images/product_02.png", name: "Chanca Piedra", price: "$120.00", description:"Some quick example text to build on the card's content." },
        { id:"3", imgSrc: "../assets/images/product_03.png", name: "Umcka Cold Care", price: "$32.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content."  },
        { id:"4", imgSrc: "../assets/images/product_04.png", name: "Cetyl Pure", price: "$75.00", description:"Some quick example text to build the bulk of the card's content." },
        { id:"5", imgSrc: "../assets/images/product_05.png", name: "Poo Pourri", price: "$25.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
        { id:"6", imgSrc: "../assets/images/product_06.png", name: "CLA Core", price: "$65.00", description:"Some quick example build on the card card's content." },
        { id:"7", imgSrc: "../assets/images/product_04.png", name: "Poo Pourri", price: "$15.00", description:"Some quick example text to build on the card title and make up the bulk of the card's content." },
      ];
    }

}