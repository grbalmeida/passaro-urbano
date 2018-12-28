import {CartItem} from './models/cart-item.model'
import {Offer} from './models/offer.model'

class CartService {
    private items: Array<CartItem> = []

    public showItems(): Array<CartItem> {
        return this.items
    }

    public includeItem(offer: Offer): void {
        let cartItem: CartItem = new CartItem(
            offer.id,
            offer.images[0],
            offer.title,
            offer.description_offer,
            offer.price,
            1
        )

        const cartFound = this.items.find((item: CartItem) => item.id === cartItem.id)

        if(cartFound) {
            cartFound.quantity += 1
        } else {
            this.items.push(cartItem)
        }
    }

    public getTotalOrders(): number {
        let total: number = 0
        this.items
            .forEach((cartItem: CartItem) =>  total += cartItem.price * cartItem.quantity)
        return total
    }

    public increaseQuantity(cartItem: CartItem): void {
        const cartFound = this.items.find((item: CartItem) => item.id === cartItem.id)

        if(cartFound) {
            cartFound.quantity++
        }
    }

    public decreaseQuantity(cartItem: CartItem): void {
        const cartFound = this.items.find((item: CartItem) => item.id === cartItem.id)

        if(cartFound && cartFound.quantity > 0) {
            cartFound.quantity--
        }

        if(cartFound.quantity === 0) {
            this.items.splice(
                this.items.indexOf(cartFound), 1
            )
        }
    }

    public clearCart(): void {
        this.items = []
    }
}

export {CartService}
