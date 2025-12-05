import { Component } from "@angular/core";
import { CurrencyPipe } from "../pipes/CurrencyPipe.pipe";
import { UpperCasePipe } from "../pipes/UppercasePipe.pite";

@Component({
    selector: 'cart-layout',
    templateUrl: './cart-layout.component.html',
    styleUrl: './cart-layout.component.css',
    imports: [CurrencyPipe, UpperCasePipe]
})

export class CartLayoutComponent{
    
}