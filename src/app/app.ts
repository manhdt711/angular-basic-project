import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import { CartLayoutComponent } from "./shared/header-layout/cart-layout.component";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule, CartLayoutComponent, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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
