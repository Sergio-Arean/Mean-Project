import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
menuOpened:boolean = false;

  constructor(){}

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

  closeMenu(): void {
    this.menuOpened = false;
  }
}
