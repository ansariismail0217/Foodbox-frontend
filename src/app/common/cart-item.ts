import { Product } from "./product";

export class CartItem {
    id!: number;
    name!: string;
    cookTime!: string;
    unitPrice!: number;
    imageUrl!:string;
    rating!: number;
    quantity!: number;

    constructor(product: Product){
        this.id = product.id;
        this.name = product.name;
        this.cookTime = product.cookTime;
        this.unitPrice = product.unitPrice;
        this.imageUrl = product.imageUrl;
        this.rating = product.rating;

        this.quantity = 1;

    }
}
