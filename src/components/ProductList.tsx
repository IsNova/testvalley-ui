import React from 'react'

const ProductList = ({ product }: any) => {
    return (
        <div className="mx-auto flex flex-col md:flex-row max-w-5xl justify-between p-6 lg:px-8">
            {/* First Column */}
            <div className="w-full md:w-1/3 p-4">
                <h2 className="text-2xl font-semibold text-gray-700">{product.title}</h2>
                <h3 className='text-xs text-gray-400 font-medium mt-2'>{product.subtitle}</h3>
            </div>

            {/* Second Column */}
            <div className="w-4/5 p-4 grid lg:grid-cols-4 grid-cols-2 gap-2">
                {/* Product Images */}
                {product?.items?.slice(1, 5).map((item: any) => {
                    const isOnDiscount = item?.publication?.discounts.length > 0
                    const haveTagOnImage = item?.publication?.tagsOnImage.length > 0
                    return (
                        <div>
                            <div key={item} className="relative">
                                <div className="">
                                    <img
                                        src={item?.publication?.media[0]?.uri}
                                        alt={`Product ${item}`}
                                        className="w-full" />
                                </div>
                                <div className="absolute bottom-0.5 left-0.5">
                                    {haveTagOnImage && (
                                        <div className="inline-flex bg-teal-600 rounded-sm font-medium text-white text-xs px-1 py-1">
                                            <img src="/return-new.svg" className="mr-0.5" />
                                            <p>{item?.publication?.tagsOnImage[0]}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="text-sm font-serif mt-1 text-gray-700 break-all outline-none">
                                {item?.publication?.title}
                            </p>
                            <div className="text-lg mt-2 font-semibold text-gray-500">
                                {isOnDiscount && (

                                    <span className="text-red-400">
                                        {item?.publication?.priceInfo?.discountRate}%
                                    </span>
                                )}
                                {isOnDiscount ? item?.publication?.priceInfo?.discountPrice : Number(item?.publication?.priceInfo?.price)}
                            </div>
                            <div>
                                {item?.publication?.tagsOnDesc}
                            </div>
                            <div className="flex text-xs text-gray-600">
                                <img src="/star-darkgray.svg" width={12} height={12} />
                                {item?.publication?.rating}
                            </div>
                            {item?.publication?.preface && (
                                <div className="mt-2 text-xs px-2 py-1 inline-flex items-center border border-gray-200 rounded-sm">
                                    <img
                                        src={item?.publication?.prefaceIconUrl}
                                        alt=""
                                        width={12}
                                        height={12} />
                                    {item?.publication?.preface}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProductList