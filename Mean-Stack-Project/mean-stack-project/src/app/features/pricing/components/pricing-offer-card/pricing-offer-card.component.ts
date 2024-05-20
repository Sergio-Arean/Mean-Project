import { Component, Input } from '@angular/core';

@Component({
  selector: 'pricing-offer-card',
  templateUrl: './pricing-offer-card.component.html',
  styleUrl: './pricing-offer-card.component.scss'
})
export class PricingOfferCardComponent {
  @Input({
    required: false
  }) title:string = '';

  @Input({
    required: false
  }) featuresList:string[] = [];


  @Input({
    required: false
  }) price:string = '';

  @Input({
    required: false
  }) sloganPrice:string = '';


}
