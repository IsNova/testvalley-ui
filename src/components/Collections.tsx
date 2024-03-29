import { getCollectionData } from '@/queries';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import ProductList from './ProductList';

const Collections = () => {
    const {
        data: collectionData,
        isLoading,
        isError,
    } = useQuery({
        queryFn: async () =>
            await getCollectionData("https://api.testvalley.kr/collections?prearrangedDiscount"),
        queryKey: ["collections"], //Array according to Documentation
    });
    const filterCollection = collectionData?.items?.filter((collection: any) => collection?.type === "SINGLE" && collection.viewType === "TILE")

    const productsByCategory = filterCollection?.reduce((acc: any, product: any) => {
        acc[product.title] = [...(acc[product.title] || []), product];
        return acc;
    }, {});

    return (
        <div className=''>
            {Object.entries(productsByCategory ?? {}).map(([title, products]) => (
                <div className="mx-auto flex flex-col md:flex-row max-w-5xl items-center justify-between" key={title}>
                    {(products as any[]).map(product => (
                        <React.Fragment key={product.id}>
                            <ProductList product={product} />
                        </React.Fragment>
                    ))}
                </div>
            ))}


        </div>
    )
}

export default Collections