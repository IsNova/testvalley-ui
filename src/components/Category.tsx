import { getCategoryData } from "@/queries";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";

function Category() {
    const {
        data: categoryData,
        isLoading,
        isError,
    } = useQuery({
        queryFn: async () =>
            await getCategoryData("https://api.testvalley.kr/main-shortcut/all"),
        queryKey: ["category"], //Array according to Documentation
    });
    console.log("🚀 ~ Category ~ categoryData:", categoryData);
    return (
        <div className="mx-auto flex max-w-5xl items-center justify-between p-6 lg:px-8 mt-10">
            <div className="grid grid-cols-5 md:grid-cols-10 gap-8">
                {categoryData?.map(
                    (category: {
                        title: string, imageUrl: string
                    }) => (
                        <div className="flex flex-col space-x-4 space-y-2 items-center justify-center">
                            <div className="">
                                <Image src={category.imageUrl} width={50} height={50} alt="something" />
                            </div>
                            <p className="text-xs text-gray-600 w-full overflow-hidden mt-2">{category?.title}</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Category;
