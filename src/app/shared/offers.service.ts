import {Offer} from './models/offer.model'

export class OffersService {
    private offers: Array<Offer> = [
        {
            id: 1,
            category: "restaurante",
            title: "Super Burger",
            description_offer: "Rodízio de Mini-hambúrger com opção de entrada.",
            advertiser: "Original Burger",
            price: 29.90,
            highlight: true,
            images: [
                {url: "/assets/offers/1/img1.jpg"},
                {url: "/assets/offers/1/img2.jpg"},
                {url: "/assets/offers/1/img3.jpg"},
                {url: "/assets/offers/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            category: "restaurante",
            title: "Cozinha Mexicana",
            description_offer: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            advertiser: "Mexicana",
            price: 32.90,
            highlight: true,
            images: [
                {url: "/assets/offers/2/img1.jpg"},
                {url: "/assets/offers/2/img2.jpg"},
                {url: "/assets/offers/2/img3.jpg"},
                {url: "/assets/offers/2/img4.jpg"}
            ]
        
        },
        {
            id: 3,
            category: "diversao",
            title: "Estância das águas",
            description_offer: "Diversão garantida com piscinas, trilhas e muito mais.",
            advertiser: "Estância das águas",
            price: 31.90,
            highlight: true,
            images: [
                {url: "/assets/offers/3/img1.jpg"},
                {url: "/assets/offers/3/img2.jpg"},
                {url: "/assets/offers/3/img3.jpg"},
                {url: "/assets/offers/3/img4.jpg"},
                {url: "/assets/offers/3/img5.jpg"},
                {url: "/assets/offers/3/img6.jpg"}
            ]
        }
    ]

    public getOffers(): Array<Offer> {
        return this.offers
    }
}