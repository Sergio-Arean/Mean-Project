import { Component, Input } from '@angular/core';
import { NavOption } from '../../../core/model/nav.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
@Input() isMobile:boolean = false;

navOptions:NavOption[] = [
  {
    title: 'Home'
  },
  {
    title: 'Articles'
  },
  {
    title: 'About Us'
  },
  {
    title: 'Contact'
  },
  {
    title: 'Sign In'
  }  
];


}
