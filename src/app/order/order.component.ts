import {Component, OnInit} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {OrderService} from '../shared/order.service'
import {Order} from '../shared/models/order.model'
import {CartService} from '../shared/cart.service'
import {CartItem} from '../shared/models/cart-item.model'

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
  private cartItems: Array<CartItem>
  private totalOrders: number
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

  constructor(
    private orderService: OrderService,
    private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.showItems()
  }

  public makeOrder(): void {
    if(this.form.status === 'INVALID') {
      this.form.get('address').markAsTouched()
      this.form.get('number').markAsTouched()
      this.form.get('complement').markAsTouched()
      this.form.get('paymentOption').markAsTouched()
    } else {

      if(this.cartService.showItems().length === 0) {
        alert('Você não selecionou nenhum item');
      } else {
        let order: Order = new Order(
          this.form.value.address,
          this.form.value.number,
          this.form.value.complement,
          this.form.value.paymentOption,
          this.cartService.showItems()
        )

        this.orderService
          .makeOrder(order)
          .subscribe((idPurchaseOrder: number) => {
            this.idPurchaseOrder = idPurchaseOrder
            this.cartService.clearCart()
          })
      }
    }
  }

  public increaseQuantity(cartItem: CartItem): void {
    this.cartService
      .increaseQuantity(cartItem)
  }

  public decreaseQuantity(cartItem: CartItem): void {
    if(cartItem.quantity > 0) {
      this.cartService
        .decreaseQuantity(cartItem)
    }
  }
}
