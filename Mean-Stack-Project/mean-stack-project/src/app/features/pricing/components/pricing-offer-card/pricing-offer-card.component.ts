import { Component, Input } from '@angular/core';
import { PricingOffer } from '../../../../core/model/pricing-offer.model';

@Component({
  selector: 'pricing-offer-card',
  templateUrl: './pricing-offer-card.component.html',
  styleUrl: './pricing-offer-card.component.scss'
})
export class PricingOfferCardComponent {
  @Input({
    required: true
  }) pricingOffer!:PricingOffer;


  frontStyles() : string {
    let rta:string = '';
    if(this.pricingOffer.type === 'free'){
      rta = 'free-plan';
    } else if (this.pricingOffer.type === 'standard'){
      rta = 'standard-plan';
    } else if (this.pricingOffer.type === 'premium'){
      rta = 'premium-plan';
    } 
    return rta;
  }

  backStyles() : string {
    let rta:string = '';
    if(this.pricingOffer.type === 'free'){
      rta = 'free-price-bg';
    } else if (this.pricingOffer.type === 'standard'){
      rta = 'standard-price-bg';
    } else if (this.pricingOffer.type === 'premium'){
      rta = 'premium-price-bg';
    } 
    return rta;
  }
}
