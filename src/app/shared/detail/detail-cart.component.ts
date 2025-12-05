import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.css']
})
export class CartDetailComponent {
  @Input() products: any[] = [];

  id = '';

  constructor(private route: ActivatedRoute){
    this.id = String(route.snapshot.paramMap.get('id'));
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }
}