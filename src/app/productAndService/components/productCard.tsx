import React from 'react'
import Image from 'next/image'

import ProductPreview from './productPreview';

interface productCardProps {
    id: number;
    name: string;
    type: string
    category: string
    price: number
    image: string
    subtitle: string
    filter: string
}

export default function productCard({ id, name, type, category, price, image, subtitle, filter }: productCardProps) {
    // const openModal = (id: number) => {
    //     console.log("product ID:", id)
    //     const modal = document.getElementById(`productPreview${id}`) as HTMLDialogElement;
    //     modal?.showModal();
    // }

    const openModal = (id: number) => {
        console.log("product ID:", id)
        const modal = document.getElementById(`productPreview${id}`) as HTMLDialogElement;
        modal?.showModal();
    }

    if (filter && filter !== category) {
        return null
    }

    return (
        <>

            <div
                key={id}
                className="bg-[#FFFFFF] p-4 w-60 lg:w-64 md:w-60 drop-shadow-md rounded-lg mx-auto"
            >
                <div className="w-full space-y-2">

                    <div className="mx-auto w-44 h-44 rounded-md overflow-hidden mb-4">
                        <Image
                            src={image || "default.png"}
                            alt="models"
                            width={200}
                            height={200}
                            priority={true}
                            style={{ objectFit: "cover", objectPosition: "top center" }}
                            className="rounded-md mx-auto"
                        />
                    </div>

                    <h1 className="text-black1 text-2xl text-start font-bold truncate">{name}</h1>

                    <div
                        className="text-gray1 text-base text-justify overflow-hidden text-ellipsis mt-2"
                        style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
                    >
                        {price} ฿
                    </div>

                    <div className="text-center mt-4 border-t border-gray1-300 pt-4">
                        <button className="px-3 py-1 items-center text-pink1 text-base rounded hover:text-blue1" onClick={() => openModal(id)}>
                            รายละเอียด
                        </button>
                        <ProductPreview
                            ID={id}
                            name={name}
                            type={type}
                            category={category}
                            price={price}
                            image={image}
                            subtitle={subtitle}
                        />
                        {/* <Modal
                            id={id}
                            category={category}
                            price={price}
                        /> */}
                    </div>
                </div>
            </div>

        </>
    )
}