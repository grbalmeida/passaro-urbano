import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {FunComponent} from './fun/fun.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'fun', component: FunComponent},
    {path: 'restaurants', component: RestaurantsComponent}
]