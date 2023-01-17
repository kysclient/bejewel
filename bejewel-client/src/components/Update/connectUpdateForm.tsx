import {IProductProps} from "../Product";
import React, {Dispatch, SetStateAction} from "react";
import {ProductDto} from "../../apis/dto/ProductDto";
import {updateProductInfo} from "../../apis/product-api";
import {UpdateForm} from "./updateForm";


export interface IConnectUpdateProps {
    product: IProductProps | undefined;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setProduct: Dispatch<SetStateAction<IProductProps | undefined>>
}

const ConnectUpdateForm = (props: IConnectUpdateProps) => {


    const handleUpdate = async (id: string | undefined, productDto: ProductDto | undefined) => {
        if(productDto !== undefined && (productDto.images.length < 1 || productDto.title === "")) {
            alert("상품제목과 이미지 1장은 필수입니다.");
            return
        }
        const response = await updateProductInfo(id, productDto)
        if(response.data) {
            console.log('response :', response.data)
            props.setProduct({...response.data})
            props.setOpen(false)
        }else{
            window.alert("상품수정에 실패하였습니다.")
        }
    };

    return <UpdateForm onUpdate={handleUpdate} parentProps={props} />
}

export default ConnectUpdateForm;