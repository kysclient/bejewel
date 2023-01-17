import {IProductProps} from "../Product";
import React, {Fragment, useEffect, useState} from "react";
import { Dialog, Transition } from '@headlessui/react'
import {IConnectUpdateProps} from "./connectUpdateForm";
import {XMarkIcon} from "@heroicons/react/20/solid";
import {numberRegex} from "../../common/utils/regex";

export interface IUpdateFormProps {
    parentProps: IConnectUpdateProps;
    onUpdate: (id: string | undefined, productDto: { images: string[]; price: string; description: string; title: string }) => void;
}

export function UpdateForm(props: IUpdateFormProps) {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState( "")
    const [description, setDescription] = useState("")
    const [images, setImages] = useState<string[]>([]);
    const [previewImages, setPreviewImages] = useState<string[] >([]);
    const {onUpdate} = props

    const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!numberRegex(e.target.value)) {
            window.alert("숫자만 입력해 주세요.");
            return
        }
        setPrice(e.target.value);
    }

    const handleUpdate = () => {
        onUpdate(props.parentProps.product?.id, {
            title: title,
            price: price,
            description: description,
            images: images
        })
    }

    useEffect(() => {
        if(props.parentProps.product !== undefined) {
            setTitle(props.parentProps.product.title)
            setPrice(props.parentProps.product.price)
            setDescription(props.parentProps.product.description)
            setPreviewImages([...props.parentProps.product.images])
        }
    },[props.parentProps.product])


    useEffect(() => {
        return setImages([...previewImages]);
    }, [previewImages])

    return (
        <>
            <Transition.Root show={props.parentProps.open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={props.parentProps.setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-scroll">
                        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            >
                                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                            onClick={() => props.parentProps.setOpen(false)}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>


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
                                                                                       // onChange={upLoadFile}
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
                                                                                           // onChange={upLoadFile}
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
                                                                    onClick={handleUpdate}
                                                                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-900 text-white py-2 px-4 text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                                >
                                                                    수정
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                        </section>







                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}