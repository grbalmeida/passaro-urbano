import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {OffersService} from '../shared/offers.service'
import {Offer} from '../shared/models/offer.model'

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css'],
  providers: [
    OffersService
  ]
})
export class OfferComponent implements OnInit {
  public offer: Offer

  constructor(
    private route: ActivatedRoute, 
    private offersService: OffersService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']
    this.offersService
      .getOfferById(id)
      .then((offer: Offer) => this.offer = offer)
  }

}
