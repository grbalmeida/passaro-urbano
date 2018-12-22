import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Offer} from './models/offer.model'
import {API_URL} from '../app.api'

@Injectable()
export class OffersService {
    private url: string = 'http://localhost:3000/offers'
    constructor(private http: HttpClient) {}

    public getOffers(): Promise<Array<Offer>> {
        return this.http
            .get(`${API_URL}?highlight=true`)
            .toPromise()
            .then((response: any) => response)
    }

    public getOffersByCategory(category: string): Promise<Array<Offer>> {
        return this.http    
            .get(`${API_URL}?category=${category}`)
            .toPromise()
            .then((response: any) => response)
    }

    public getOfferById(id: number): Promise<Offer> {
        return this.http
            .get(`${API_URL}?id=${id}`)
            .toPromise()
            .then((response: any) => response.shift())
    }
}