

export default interface ProductInterface {
    productId: number,
    productName: string,
    stars: number,
    imageUrl: string
    listPrice: number | null,
    price: number,
    installments: [{
        quantity: number,
        value: number
    }]
}