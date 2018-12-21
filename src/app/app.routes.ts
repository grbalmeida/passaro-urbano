import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {FunComponent} from './fun/fun.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {OfferComponent} from './offer/offer.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'fun', component: FunComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'offer', component: HomeComponent},
    {path: 'offer/:id', component: OfferComponent}
]