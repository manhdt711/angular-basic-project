import { Component } from "@angular/core";
import { CurrencyPipe } from "../pipes/CurrencyPipe.pipe";
import { UpperCasePipe } from "../pipes/UppercasePipe.pite";
import { NgClass, NgFor, NgIf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'cart-layout',
    templateUrl: './cart-layout.component.html',
    styleUrl: './cart-layout.component.css',
    imports: [CurrencyPipe, UpperCasePipe, NgFor, NgClass, NgIf, RouterLink]
})

export class CartLayoutComponent{
    
    isActive = false;

    isVisible = false;

    products = [
        {
            id: 1,
            name: "SAMBAOG",
            price: 40000000,
            image: ""
        },
        {
            id: 2,
            name: "iPhone 15 Pro Max",
            price: 35000000,
            image: "https://example.com/images/iphone15promax.jpg"
        },
        {
            id: 3,
            name: "Samsung Galaxy S24 Ultra",
            price: 32000000,
            image: "https://example.com/images/galaxys24ultra.jpg"
        },
        {
            id: 4,
            name: "Laptop Dell XPS 13",
            price: 25000000,
            image: "https://example.com/images/dellxps13.jpg"
        },
        {
            id: 5,
            name: "Macbook Air M2",
            price: 28000000,
            image: "https://example.com/images/macbookairm2.jpg"
        },
        {
            id: 6,
            name: "Tai nghe Sony WH-1000XM5",
            price: 8000000,
            image: "https://example.com/images/sonywh1000xm5.jpg"
        },
        {
            id: 7,
            name: "Chuột Logitech MX Master 3S",
            price: 2000000,
            image: "https://example.com/images/logitechmxmaster3s.jpg"
        },
        {
            id: 8,
            name: "Smart TV LG OLED55C2",
            price: 22000000,
            image: "https://example.com/images/lgoled55c2.jpg"
        }
    ];
}