import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Offer} from './models/offer.model'

@Injectable()
export class OffersService {
    constructor(private http: HttpClient) {}

    public getOffers(): Promise<Array<Offer>> {
        return this.http
            .get('http://localhost:3000/offers?highlight=true')
            .toPromise()
            .then((response: any) => response)
    }
}