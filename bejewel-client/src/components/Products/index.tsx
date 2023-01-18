import {ProductList} from "./product";

export interface IProductProps {
    id: string;

    title: string;

    description: string;

    images: string[]

    price: string;
}

export function Products() {
    return <ProductList />;
}