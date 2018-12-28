class CartItem {
	constructor(
		public id: number,
		public image: object,
		public title: string,
		public description_offer: string,
		public price: number,
		public quantity: number
	) {}
} 

export {CartItem}