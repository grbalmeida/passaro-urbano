import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {OffersService} from '../../shared/offers.service'

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.css'],
  providers: [
    OffersService
  ]
})
export class HowToUseComponent implements OnInit {
  private description: string = ''

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) { }

  ngOnInit() {
    const id = this.route.parent.snapshot.params['id']
    this.offersService
      .getHowToUseOfferById(id)
      .then((description: string) => this.description = description)
  }

}
