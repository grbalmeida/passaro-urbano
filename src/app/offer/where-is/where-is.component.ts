import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
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
    const id = this.route.parent.snapshot.params['id']
    this.offersService
      .getWhereIsOfferById(id)
      .then((description: string) => this.description = description)
  }

}
