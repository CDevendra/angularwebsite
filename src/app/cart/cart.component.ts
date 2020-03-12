import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cartProduct: any[] = [];
    totalCartAmount: number = 0;
    // singleProductTotal: number = 1;

    constructor() { }

    ngOnInit() {
        this.cartProduct = [
            { id: "6", imgSrc: "../assets/pictures/chair_1.jpg", name: "CLA Core", oldPrice: "120.00", price: 5.00, quantity: 1, totalPrice:  5.00, description: "Some quick example build on the card card's content." },
            { id: "7", imgSrc: "../assets/pictures/product_1.jpg", name: "Poo Pourri", oldPrice: "120.00", price: 1.00, quantity: 1, totalPrice: 1.00, description: "Some quick example text to build on the card title and make up the bulk of the card's content." }
        ];
        this.cartTotal();
    }

    removeFromCart(index) {
        this.cartProduct.splice(index, 1);
        this.cartTotal();
    }

    addProductQuantity(product, index){
        product.totalPrice = product.totalPrice + product.price;
        product.quantity = product.quantity + 1;
        this.cartTotal();
    }
    removeProductQuantity(product, index) {
        product.totalPrice = product.totalPrice - product.price;
        product.quantity = product.quantity - 1;
        this.cartTotal();
    }

    cartTotal(){
        this.totalCartAmount = 0;
        for (let i = 0; i < this.cartProduct.length; i++) {
            this.totalCartAmount = this.totalCartAmount + this.cartProduct[i].totalPrice;            
        }
         
    }
    
}
