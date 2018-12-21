import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Offer} from './models/offer.model'

@Injectable()
export class OffersService {
    private url: string = 'http://localhost:3000/offers'
    constructor(private http: HttpClient) {}

    public getOffers(): Promise<Array<Offer>> {
        return this.http
            .get(`${this.url}?highlight=true`)
            .toPromise()
            .then((response: any) => response)
    }

    public getOffersByCategory(category: string): Promise<Array<Offer>> {
        return this.http    
            .get(`${this.url}?category=${category}`)
            .toPromise()
            .then((response: any) => response)
    }
}