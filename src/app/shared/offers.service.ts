import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Offer} from './models/offer.model'
import {API_URL} from '../app.api'

@Injectable()
export class OffersService {
    constructor(private http: HttpClient) {}

    public getOffers(): Promise<Array<Offer>> {
        return this.http
            .get(`${API_URL}/offers?highlight=true`)
            .toPromise()
            .then((response: any) => response)
    }

    public getOffersByCategory(category: string): Promise<Array<Offer>> {
        return this.http    
            .get(`${API_URL}/offers?category=${category}`)
            .toPromise()
            .then((response: any) => response)
    }

    public getOfferById(id: number): Promise<Offer> {
        return this.http
            .get(`${API_URL}/offers?id=${id}`)
            .toPromise()
            .then((response: any) => response.shift())
    }

    public getHowToUseOfferById(id: number): Promise<string> {
        return this.http
            .get(`${API_URL}/how-to-use?id=${id}`)
            .toPromise()
            .then((response: any) => response.shift().description)
    }

    public getWhereIsOfferById(id: number): Promise<string> {
        return this.http
            .get(`${API_URL}/where-is?id=${id}`)
            .toPromise()
            .then((response: any) => response.shift().description)
    }
}