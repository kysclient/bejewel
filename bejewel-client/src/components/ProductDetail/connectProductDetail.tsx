import {useNavigate} from "react-router-dom";
import {deleteProduct, enrolProduct} from "../../apis/product-api";
import React, {Dispatch, SetStateAction} from "react";
import {ProductDetailUI} from "./productDetail";


export function ConnectProductDetail() {

    const navigate = useNavigate()

    const handleDelete = async (productId: string | undefined) => {
        const response = await deleteProduct(productId)
        if (response.data) {
            navigate("/")
        } else {
            window.alert("상품삭제를 실패하였습니다.")
        }
    };

    const handleUpdate = (setOpen: Dispatch<SetStateAction<boolean>>) => {
        setOpen(true)
    };

    return <ProductDetailUI onDelete={handleDelete} onUpdate={handleUpdate}/>;
}