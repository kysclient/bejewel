import React, {useEffect, useState} from "react";
import {ProductDto} from "../../apis/dto/ProductDto";
import {uploadProductImages} from "../../apis/product-api";
import {numberRegex} from "../../common/utils/regex";
import {useLocation, useParams} from "react-router-dom";
import {upLoadFile} from "../../common/utils/fileUpLoad";


interface IFormProps {
    onSubmit: (productDto: ProductDto) => void;
}

export function Form(props: IFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [previewImages, setPreviewImages] = useState([]);
    const [images, setImages] = useState([]);
    const {onSubmit} = props;


    const handleSubmit = (e: React.FormEvent) => {
                onSubmit({
                    title: title,
                    description: description,
                    images: images,
                    price: price
                })
    };

    const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!numberRegex(e.target.value)) {
            window.alert("숫자만 입력해 주세요.");
            return
        }
        setPrice(e.target.value);
    }


    useEffect(() => {
        setImages([...previewImages])
    }, [previewImages])

    return (
        <div style={{padding: '20px'}}>
            <section>
                <div className="md:container">
                    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

                        <div className="">
                                <div className="shadow sm:overflow-hidden ">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium text-gray-700">
                                                상품 제목
                                            </label>
                                            <input
                                                placeholder="제목을 입력해 주세요."
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>


                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name"
                                                   className="block text-sm font-medium text-gray-700">
                                                가격
                                            </label>
                                            <input
                                                placeholder="가격을 입력해 주세요."
                                                value={price}
                                                onChange={(e) => {onPriceChange(e)}}
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>


                                        <div>
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                상품설명
                                            </label>
                                            <div className="mt-1">
                                              <textarea
                                                  placeholder="내용을 입력해 주세요."
                                                  value={description}
                                                  onChange={(e) => {setDescription(e.target.value)}}
                                                  id="about"
                                                  name="about"
                                                  rows={3}
                                                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                              />
                                            </div>
                                        </div>


                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">상품사진</label>
                                            <div
                                                className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                                <div className="space-y-1 text-center">
                                                    <label
                                                        htmlFor={"file-upload"}
                                                        style={{cursor:'pointer'}}
                                                        >
                                                    <svg
                                                        className="mx-auto h-12 w-12 text-gray-400"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth={2}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                        <input id="file-upload" name="file-upload" type="file"
                                                               multiple={true}
                                                               className="sr-only"
                                                               accept={"image/*"}
                                                               onChange={(e) => {upLoadFile(setPreviewImages, e)}}
                                                        />
                                                    </label>
                                                    <div className="flex text-sm text-gray-600">
                                                        <label
                                                            htmlFor="file-upload"
                                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                                        >
                                                            <span>파일 업로드</span>
                                                            <input id="file-upload" name="file-upload" type="file"
                                                                   multiple={true}
                                                                   className="sr-only"
                                                                   accept={"image/*"}
                                                                   onChange={(e) => {upLoadFile(setPreviewImages, e)}}
                                                            />

                                                        </label>
                                                        <p className="pl-1">파일은 최대 5장까지 업로드 가능합니다.</p>
                                                        <p className="pl-1">첫번째 업로드파일은 메인화면 프리뷰 이미지로도 사용됩니다.</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        previewImages.length > 0 ?
                                            <div className="bg-white">
                                                <div
                                                    className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                                                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Preview</h2>

                                                    <div
                                                        className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
                                                        {previewImages.map((image, idx) => (
                                                            <div key={`image${idx + image}`} className="group relative">
                                                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                                                                    <img
                                                                        src={image}
                                                                        alt={image}
                                                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            : null
                                    }


                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="button"
                                            onClick={(e) => {handleSubmit(e)}}
                                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-900 text-white py-2 px-4 text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            등록
                                        </button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>


            </section>
        </div>
    );
}