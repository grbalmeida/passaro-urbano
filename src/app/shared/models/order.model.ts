export class Order {
    constructor(
        public address: string,
        public number: string,
        public complement: string,
        public paymentOption: string
    ) {}
}