export interface Billboard {
    id:string;
    label:string;
    imageUrl:string;
}

export interface Category {
    id:string;
    name:string;
    billboard:Billboard;
}

export interface Product {
    id:string;
    category: Category;
    name:string;
    price:string;
    isFeatured:boolean;
    size:Size;
    images:Image[]
    color:Color;
    quantity:number;
}

export interface Image{
    id:string;
    url:string;
}

export interface Color {
    id:string;
    value:string;
    name:string;
}

export interface Size {
    id:string;
    value:string;
    name:string;
}