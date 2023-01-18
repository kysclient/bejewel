import {useEffect, useState} from "react";
import {IProductProps} from "../components/Products";
import {fetchProducts} from "../apis/product-api";


export const useProducts = () => {

    const [products, setProducts] = useState<IProductProps[]>([])

    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetchProducts()
            setProducts([...response.data])
        };
        loadProducts()

    }, [])

    return { products }

}