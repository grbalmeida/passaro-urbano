import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'
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
  private idPurchaseOrder: number
  private form: FormGroup = new FormGroup({
    'address': new FormControl(null, 
      [Validators.required, 
       Validators.minLength(3), 
       Validators.maxLength(120)]),
    'number': new FormControl(null, 
      [Validators.required, 
       Validators.pattern(/^\d+$/), 
       Validators.minLength(1), 
       Validators.maxLength(20)]),
    'complement': new  FormControl(null),
    'paymentOption': new FormControl(null, 
      [Validators.required])
  })

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    
  }

  public makeOrder(): void {
    if(this.form.status === 'INVALID') {
      this.form.get('address').markAsTouched()
      this.form.get('number').markAsTouched()
      this.form.get('complement').markAsTouched()
      this.form.get('paymentOption').markAsTouched()
    } else {
      let order: Order = this.form.value

      this.orderService
        .makeOrder(order)
        .subscribe((idPurchaseOrder: number) => this.idPurchaseOrder = idPurchaseOrder)
    }
  }
}
