import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "../header-layout/header-layout.component";
import { CartLayoutComponent } from "../cart/cart-layout.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';

@Component({
  selector: 'home',
  imports: [ HeaderLayoutComponent, FormsModule, CartLayoutComponent, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Home {
  protected readonly title = signal('angular-basic-project');

  //text
  public mTitle = {
    name: 'mankNe',
    old: 2025
  }

  // Properties
  isDisable = false;
  
  //Attributes
  contentImage = 'Ninedev Welcome';

  nameBtn = 'Click Me!'

  clickedMessage = '';

  bindingMesssage = '';

  handleClickMe(): void{
    console.log('oh no cai gi day')
    this.clickedMessage = 'Click Cl!';
  }

  updateInput(): void{
    console.log('up up up')
  }


}
