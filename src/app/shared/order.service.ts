import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

import {Order} from './models/order.model'
import {API_URL} from '../app.api'

@Injectable()
export class OrderService {
    constructor(private http: HttpClient) {}

    public makeOrder(order: Order): Observable<any> {
        const headers: HttpHeaders = new HttpHeaders()
        headers.append('Content-Type', 'application/json')

        return this.http
            .post(`${API_URL}/orders`, JSON.stringify(order), {headers})
            .pipe(map((response: HttpResponse<any>) => response['id']))
    }
}