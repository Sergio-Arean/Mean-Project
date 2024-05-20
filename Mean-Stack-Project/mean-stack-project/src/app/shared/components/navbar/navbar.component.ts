import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavOption } from '../../../core/model/nav.model';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
@Input() isMobile:boolean = false;
@Output() redirectionOccurence: EventEmitter<boolean> = new EventEmitter<boolean>(); 

constructor(private router: Router){}

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



redirectTo(path:string) : void {
  this.redirectionOccurence.emit(true)
  this.router.navigate([`/${path}`]);
}



}
