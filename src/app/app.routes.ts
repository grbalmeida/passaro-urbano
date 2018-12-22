import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {FunComponent} from './fun/fun.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {OfferComponent} from './offer/offer.component'
import {HowToUseComponent} from './offer/how-to-use/how-to-use.component'
import {WhereIsComponent} from './offer/where-is/where-is.component'
 
export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'fun', component: FunComponent},
    {path: 'restaurants', component: RestaurantsComponent},
    {path: 'offer', component: HomeComponent},
    {path: 'offer/:id', component: OfferComponent, 
        children: [
            {path: '', component: HowToUseComponent},
            {path: 'how-to-use', component: HowToUseComponent},
            {path: 'where-is', component: WhereIsComponent}
        ]
    }
]