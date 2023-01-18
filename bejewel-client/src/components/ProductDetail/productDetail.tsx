import {useParams} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {fetchProductInfo} from "../../apis/product-api";
import {IProductProps} from "../Products";
import ConnectUpdateForm from "../Update/connectUpdateForm";


interface IProductDetailProps {
    onDelete: (productId: string | undefined) => void;
    onUpdate: (setOpen: Dispatch<SetStateAction<boolean>>) => void;
}


export function ProductDetailUI(props: IProductDetailProps) {

    let {id} = useParams();
    const {onDelete, onUpdate} = props;

    const [product, setProduct] = useState<IProductProps>()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const loadProduct = async () => {
            const response = await fetchProductInfo(id)
            setProduct(response.data)
        };
        loadProduct()

    }, [id])

    return (
        <>
            <div className="bg-white">
                <div className="pt-6">

                    {/* Image gallery */}
                    <div
                        className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">

                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                src={product?.images[0]}
                                alt={product?.images[0]}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                            {
                                product?.images.map((image, idx) => {
                                    return (
                                        idx !== 0 && idx !== product.images.length - 1 ?
                                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg" key={image + idx}>
                                                <img
                                                    src={image}
                                                    alt={image}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div> : null
                                    )
                                })
                            }
                        </div>

                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                            <img
                                src={product?.images[product?.images.length - 1]}
                                alt={product?.images[product?.images.length - 1]}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>


                    </div>

                    {/* Products info */}
                    <div
                        className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.title}</h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">상품 정보</h2>
                            <p className="text-3xl tracking-tight text-gray-900">{`${product?.price}원`}</p>


                            <button
                                onClick={() => {
                                    onUpdate(setOpen)
                                }}
                                type="button"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 py-3 px-8 text-base font-medium text-white hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                수정
                            </button>

                            <button
                                onClick={() => {
                                    onDelete(id)
                                }}
                                type="button"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-900 py-3 px-8 text-base font-medium text-white hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                삭제
                            </button>

                        </div>

                        <div
                            className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product?.description}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <ConnectUpdateForm
                 open={open}
                 setOpen={setOpen}
                 product={product}
                 setProduct={setProduct}
                />
            </div>

        </>
    )
}