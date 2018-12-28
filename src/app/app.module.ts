import {BrowserModule} from '@angular/platform-browser'
import {NgModule, LOCALE_ID} from '@angular/core'
import {RouterModule} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {registerLocaleData} from '@angular/common'
import localePt from '@angular/common/locales/pt'
import {HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component'
import {HeaderComponent} from './header/header.component'
import {HomeComponent} from './home/home.component'
import {FooterComponent} from './footer/footer.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import {FunComponent} from './fun/fun.component'
import {ROUTES} from './app.routes'
import {OfferComponent} from './offer/offer.component'
import {HowToUseComponent} from './offer/how-to-use/how-to-use.component'
import {WhereIsComponent} from './offer/where-is/where-is.component'
import {ReducedDescription} from './shared/reduced-description.pipe'

import {OrderComponent} from './order/order.component'
import {OrderSummaryComponent} from './order-summary/order-summary.component'
import {CartService} from './shared/cart.service'
registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantsComponent,
    FunComponent,
    OfferComponent,
    HowToUseComponent,
    WhereIsComponent,
    ReducedDescription,
    OrderComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    CartService,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
