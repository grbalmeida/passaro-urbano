import { Component, OnInit } from '@angular/core';
import {Observable, Subject, of} from 'rxjs'
import {switchMap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators'
import {OffersService} from '../shared/offers.service'
import {Offer} from '../shared/models/offer.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [
    OffersService
  ]
})
export class HeaderComponent implements OnInit {
  
  private offers: Observable<Array<Offer>>
  private subjectSearch: Subject<string> = new Subject<string>()

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.subjectSearch
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((searchTerm: string) => {
        return searchTerm.trim() === ''
          ? of<Array<Offer>>([])
          : this.offersService.searchOffers(searchTerm)
      })) 
      .pipe(catchError((error: any) => of<Array<Offer>>([])))
  }

  public search(searchTerm: string): void {
    this.subjectSearch
      .next(searchTerm)
  }

  public cleanSearch(): void {
    this.subjectSearch.next('')
  }

}
