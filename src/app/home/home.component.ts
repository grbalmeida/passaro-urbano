import { Component, OnInit } from '@angular/core';
import {OffersService} from '../shared/offers.service'
import {Offer} from '../shared/models/offer.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    OffersService
  ]
})
export class HomeComponent implements OnInit {

  private offers: Array<Offer>

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this
      .offersService
      .getOffers()
      .then((offers: Array<Offer>) => this.offers = offers)
  }

}
