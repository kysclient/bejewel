import {useEffect, useState} from "react";
import {IProductProps} from "../components/Products";
import {fetchProducts} from "../apis/product-api";
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;


export const useProducts = () => {

    const [products, setProducts] = useState<IProductProps[]>([])
    const [loading, setLoading] = useState<boolean>(false)


    useEffect( () => {
        setLoading(true)
        const loadProducts = async () => {
            const response = await fetchProducts()
            setProducts([...response.data])
            if(response) setLoading(false)
        };
        loadProducts()

    }, [])

    return { products, loading }

}