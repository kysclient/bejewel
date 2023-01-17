import {ProductUI} from "./product";

export interface IProductProps {
    id: string;

    title: string;

    description: string;

    images: string[]

    price: string;
}

export function Product() {
    return <ProductUI />;
}