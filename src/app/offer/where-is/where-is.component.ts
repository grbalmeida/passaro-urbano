import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import {OffersService} from '../../shared/offers.service'

@Component({
  selector: 'app-where-is',
  templateUrl: './where-is.component.html',
  styleUrls: ['./where-is.component.css'],
  providers: [
    OffersService
  ]
})
export class WhereIsComponent implements OnInit {
  private description: string = ''

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      this.offersService
      .getWhereIsOfferById(params.id)
      .then((description: string) => this.description = description)
    })
  }

}
