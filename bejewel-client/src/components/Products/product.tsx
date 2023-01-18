import {Link} from "react-router-dom";
import {useProducts} from "../../hooks/useProducts";


export function ProductList() {
    const {products} = useProducts();

    return (
        <>
            <h2 className="text-2xl font-bold text-gray-900 py-10">이 주얼리 어때요?</h2>

            <div className="mx-auto max-w-2xl y-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                <div
                    className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                    {
                        products.length > 0 ?
                            products.map((product, idx) => (
                                <Link to={`/detail/${product.id}`} className="group" key={`list${idx}`}>
                                    <div
                                        className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
                                        <img
                                            src={product.images[0]}
                                            alt={product.title}
                                            className="w-full object-cover object-center group-hover:opacity-75"
                                            style={{height: '300px'}}
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{`${product.price}원`}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{product.title}</p>
                                </Link>
                            ))
                            :
                            <>
                                <Link to={"/enrol"} style={{cursor: 'pointer'}}>
                                    <div
                                        className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                        <div className="space-y-1 text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                        </div>
                                        <div className="text-center">
                                            등록된 상품이 없습니다. 상품을 등록해 주세요.
                                        </div>
                                    </div>
                                </Link>
                            </>
                    }

                </div>
            </div>
        </>
    )
}