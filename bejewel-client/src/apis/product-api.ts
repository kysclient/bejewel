import {client} from "../common/utils/axios";
import {ProductDto} from "./dto/ProductDto";
import axios from "axios";
import {baseURL} from "../common/constants/baseURL";


export function fetchProducts() {
    return client.get("/products")
}

export function fetchProductInfo(productId: string | string[] | undefined) {
    return client.get(`/products/${productId}`)
}

export function updateProductInfo(productId: string | string[] | undefined, product: ProductDto | undefined) {
    return client.put(`/products/${productId}`, product)
}

export function deleteProduct(productId: string | string[] | undefined) {
    return client.delete(`/products/${productId}`)
}

export function enrolProduct(product: ProductDto) {
    return client.post(`/products/enrol`, product)
}


export function uploadProductImages(files: File[]) {
    let formData = new FormData();
    for (let file of files) {
        formData.append("files", file);
    }
    return axios.post(`${baseURL}/files/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

