import {CartItem} from "./cart-item.model"

export class Order {
    constructor(
        public address: string,
        public number: string,
        public complement: string,
        public paymentOption: string,
        public items: Array<CartItem>
    ) {}
}