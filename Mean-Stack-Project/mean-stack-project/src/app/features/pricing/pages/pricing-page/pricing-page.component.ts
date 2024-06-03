import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { PricingOffer } from '../../../../core/model/pricing-offer.model';
import { mockPricingOffers } from '../../../../../../backend/mock.backend';
import { PricingOfferCardComponent } from '../../components/pricing-offer-card/pricing-offer-card.component';

@Component({
  selector: 'app-pricing-page',
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss'
})
export class PricingPageComponent implements OnInit, AfterViewInit {

  pricingOffers:PricingOffer[] = [];
  @ViewChildren (PricingOfferCardComponent) offerCards!: QueryList<PricingOfferCardComponent>;

ngOnInit(): void {
  this.pricingOffers = mockPricingOffers; 
}

ngAfterViewInit(): void {
  
  this.offerCards.forEach(offerCard => offerCard.logFeatures());
}



}
