import {Form} from "./form";
import {enrolProduct, fetchProducts, updateProductInfo} from "../../apis/product-api";
import React, {Dispatch} from "react";
import {ProductDto} from "../../apis/dto/ProductDto";
import {useNavigate} from "react-router-dom";


export function ConnectedForm() {

    const navigate = useNavigate()
    const handleSubmit = async (productDto: ProductDto) => {
        if(productDto.images.length < 1 || productDto.title === "") {
            alert("상품제목과 이미지 1장은 필수입니다.");
            return
        }

        const response = await enrolProduct(productDto)
        if(response.data.data.success) {
            navigate("/")
        }else{
            window.alert("상품등록에 실패하였습니다.")
        }
    };



    return <Form onSubmit={handleSubmit} />;
}