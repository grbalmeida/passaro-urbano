import { Component, OnInit } from '@angular/core';
import {Offer} from '../shared/models/offer.model'
import {OffersService} from '../shared/offers.service'

@Component({
  selector: 'app-fun',
  templateUrl: './fun.component.html',
  styleUrls: ['./fun.component.css'],
  providers: [
    OffersService
  ]
})
export class FunComponent implements OnInit {

  private funs: Array<Offer>

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offersService
      .getOffersByCategory('fun')
      .then((offers: Array<Offer>) => this.funs = offers)
  }

}
