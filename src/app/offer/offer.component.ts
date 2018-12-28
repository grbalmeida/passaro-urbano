import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {OffersService} from '../shared/offers.service'
import {Offer} from '../shared/models/offer.model'
import {CartService} from '../shared/cart.service'

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
    private offersService: OffersService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.offersService
      .getOfferById(params.id)
      .then((offer: Offer) => this.offer = offer)
    })
  }

  public addItemToCart() {
    this.cartService
      .includeItem(this.offer)
  }
}
