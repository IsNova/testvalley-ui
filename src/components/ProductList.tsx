import Image from 'next/image'
import React from 'react'

const ProductList = ({ product }: any) => {
    return (
        <div className="mx-auto flex flex-col lg:flex-row max-w-5xl justify-between mt-6 p-4 lg:px-6">
            {/* First Column */}
            <div className="w-full lg:w-1/4 p-3">
                <h2 className="text-2xl font-semibold text-gray-700 lg:line-clamp-2">{product?.title}</h2>
                <h3 className='text-xs text-gray-400 font-medium mt-2'>{product?.subtitle}</h3>
            </div>

            {/* Second Column */}
            <div className="lg:w-4/5 lg:p-4 grid lg:grid-cols-4 grid-cols-2 gap-2">
                {/* Product Images */}
                {product?.items?.slice(1, 5).map((item: any) => {
                    const isOnDiscount = item?.publication?.discounts.length > 0
                    const haveTagOnImage = item?.publication?.tagsOnImage.length > 0
                    return (
                        <div key={item}>
                            <div className="relative">
                                <div className="">
                                    <Image
                                        src={item?.publication?.media[0]?.uri}
                                        alt={`Product ${item}`}
                                        className="w-full"
                                        height={80}
                                        width={50}
                                        unoptimized
                                    />
                                </div>
                                <div className="absolute bottom-0.5 left-0.5">
                                    {haveTagOnImage && (
                                        <div className="inline-flex bg-teal-600 rounded-sm font-medium text-white text-xs px-1 py-1">
                                            <Image src="/return-new.svg" className="mr-0.5" height={5} width={5} alt='return-image' />
                                            <p>{item?.publication?.tagsOnImage[0]}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="text-sm font-serif mt-1 text-gray-700 break-all outline-none line-clamp-2">
                                {item?.publication?.title}
                            </p>
                            <div className="text-lg mt-2 font-semibold text-gray-700">
                                {isOnDiscount && (

                                    <span className="text-red-400">
                                        {item?.publication?.priceInfo?.discountRate}%
                                    </span>
                                )}
                                {new Intl.NumberFormat('en-US').format(isOnDiscount ? item?.publication?.priceInfo?.discountPrice : Number(item?.publication?.priceInfo?.price))}
                                <span className='text-xs font-medium'>원</span>
                            </div>
                            <div>
                                {item?.publication?.tagsOnDesc}
                            </div>
                            <div className="flex text-xs text-gray-600">
                                <Image src="/star-darkgray.svg" width={12} height={12} alt='star-darkgray' />
                                {item?.publication?.rating}
                            </div>
                            {item?.publication?.preface && (
                                <div className="mt-2 text-xs px-2 py-1 inline-flex items-center border border-gray-200 rounded-sm">
                                    <Image
                                        src={item?.publication?.prefaceIconUrl}
                                        alt="preface-icon"
                                        width={12}
                                        height={12}

                                    />
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