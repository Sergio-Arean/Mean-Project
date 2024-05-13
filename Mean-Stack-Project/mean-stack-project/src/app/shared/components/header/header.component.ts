import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
menuOpened:boolean = false;
@Output() openMenu: EventEmitter<boolean> = new EventEmitter();

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
    this.openMenu.emit(this.menuOpened);
  }
}
