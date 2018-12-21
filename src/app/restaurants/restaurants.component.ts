import { Component, OnInit } from '@angular/core';
import {OffersService} from '../shared/offers.service'
import {Offer} from '../shared/models/offer.model'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [
    OffersService
  ]
})
export class RestaurantsComponent implements OnInit {

  private restaurants: Array<Offer>

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService
      .getOffersByCategory('restaurants')
      .then((offers: Array<Offer>) => this.restaurants = offers)
  }

}
