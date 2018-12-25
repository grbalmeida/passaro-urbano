import {Component, OnInit, ViewChild} from '@angular/core'
import {NgForm} from '@angular/forms'
import {OrderService} from '../shared/order.service'
import {Order} from '../shared/models/order.model'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [
    OrderService
  ]
})
export class OrderComponent implements OnInit {
  @ViewChild('form') private form: NgForm
  private idPurchaseOrder: number

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    
  }

  public makeOrder(): void {
    let order: Order = this.form.value
    this.orderService
      .makeOrder(order)
      .subscribe((idPurchaseOrder: number) => this.idPurchaseOrder = idPurchaseOrder)
  }
}
