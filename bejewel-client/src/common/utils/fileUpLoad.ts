import {uploadProductImages} from "../../apis/product-api";
import React, {Dispatch, SetStateAction} from "react";


export const upload = (files: File[]) => {
    return uploadProductImages(files)
}

export const upLoadFile = async (
    setPreviewImages: Dispatch<SetStateAction<never[]>>,
    {
        currentTarget: {files},
    }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length && files.length < 6) {
        const response = await upload(Array.from(files || []))
        if (!response.data.success) {
            window.alert("서버와의 통신이 실패하였습니다.")
            return
        }
        setPreviewImages(response.data.data);
    } else {
        window.alert("잘못된 파일이거나 파일은 최대 5장까지 업로드 가능합니다.")
        return
    }
}